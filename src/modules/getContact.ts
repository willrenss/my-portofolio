import { useQuery, gql } from '@apollo/client';

export interface Contact {
    first_name: string;
    last_name: number;
    created_at: string;
    id: number;
    phones: [];
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

export const useGetContact = (request: object) => {
  const { loading, error, data } = useQuery(getContact, { variables: request });

  if (loading) {
    return { loading: true, data: null, error: null };
  }

  if (error) {
    return { loading: false, data: null, error: `Error! ${error.message}` };
  }


  return { loading: false, data, error: null };
};
