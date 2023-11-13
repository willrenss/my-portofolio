import { useQuery, gql } from '@apollo/client';

export interface Contact {
    first_name: string
    last_name: string
    created_at: string
    id: number
    phones: [{
      number: string
    }];
}

export interface Phone {  
    number: string  
}

export interface PhoneObj {
  contact: {
    first_name: string
    last_name: string
    id: number
  }
  number: string
}

export const getContact = gql`
query GetContactList (
    $distinct_on: [contact_select_column!], 
    $limit: Int, 
    $offset: Int, 
    $order_by: [contact_order_by!], 
    $where: contact_bool_exp
) {
  contact(
      distinct_on: $distinct_on, 
      limit: $limit, 
      offset: $offset, 
      order_by: $order_by, 
      where: $where
  )
  {
    created_at
    first_name
    id
    last_name
    phones {
      number
    }
  }
}
`;

export const getPhoneList = gql`
query GetPhoneList(
  $where: phone_bool_exp,
  $distinct_on: [phone_select_column!],
  $limit: Int = 10,
  $offset: Int = 0,
  $order_by: [phone_order_by!]
) {
  phone(where: $where, distinct_on: $distinct_on, limit: $limit, offset: $offset, order_by: $order_by) {
    contact {
      last_name
      first_name
      id
    }
    number
  }
}
`;

export const useGetPhoneList = (request: object) => {
  const { loading, error, data } = useQuery(getPhoneList, { variables: request })
  if (loading) {
    return { loading: true, data: null, error: null,};
  }

  if (error) {
    return { loading: false, data: null, error: `Error! ${error.message}`};
  }


  return { loading: false, data, error: null};
};


export const useGetContact = (request: object, whereReq: object) => { 
  const { loading, error, data } = useQuery(getContact, { variables: request })
  const { data: total } = useQuery(getContact, { variables: whereReq }) 
  if (loading) {
    return { loading: true, data: null, error: null, count: total?.contact?.length};
  }

  if (error) {
    return { loading: false, data: null, error: `Error! ${error.message}`, count: total?.contact?.length};
  }


  return { loading: false, data, error: null, count: total?.contact?.length};
};
