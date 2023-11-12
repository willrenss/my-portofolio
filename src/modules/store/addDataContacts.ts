import { gql, useMutation } from '@apollo/client';

export interface Contact {
    first_name: string;
    last_name: string;
    created_at: string;
    id: number;
    phones: [{
        number: string
    }];
}
export const addContact = gql`
mutation AddContactWithPhones(
    $first_name: String!, 
    $last_name: String!, 
    $phones: [phone_insert_input!]!
    ) {
  insert_contact(
      objects: {
          first_name: $first_name, 
          last_name: 
          $last_name, phones: { 
              data: $phones
            }
        }
    ) {
    returning {
      first_name
      last_name    
      id
      phones {
        number
      }
    }
  }
}
`;

export const useAddContact = (request: object) => {
    const [addC, { data, loading, error }] = useMutation(addContact, { variables: request })
    if (loading) {
        return { addC: addC, loading: true, data: null, error: null };
    }

    if (error) {
        return { addC: addC, loading: false, data: null, error: error };
    }


    return { addC: addC, loading: false, data, error: null };
};
