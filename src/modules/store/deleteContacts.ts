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
export const deleteContact = gql`
mutation MyMutation($id: Int!) {
  delete_contact_by_pk(id: $id) {
    first_name
    last_name
    id
  }
}
`;

export const useDeleteContact = (request: object) => {
    const [deleteC, { data, loading, error }] = useMutation(deleteContact, { variables: request })
    if (loading) {
        return { deleteC: deleteC, loading: true, data: null, error: null };
    }

    if (error) {
        return { deleteC: deleteC, loading: false, data: null, error: `Error! ${error.message}` };
    }


    return { deleteC: deleteC, loading: false, data, error: null };
};
