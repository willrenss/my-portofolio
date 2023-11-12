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
export const editContact = gql`
mutation EditContactById($id: Int!, $_set: contact_set_input) {
  update_contact_by_pk(pk_columns: {id: $id}, _set: $_set) {
    id
    first_name
    last_name
    phones {
      number
    }
  }
}
`;

export const useEditContact = (request: object) => {
    const [editFav, { data, loading, error }] = useMutation(editContact, { variables: request })
    if (loading) {
        return { editFav:editFav, loading: true, data: null, error: null};
    }

    if (error) {
        return { editFav: editFav, loading: false, data: null, error: `Error! ${error.message}`};
    }


    return { editFav: editFav, loading: false, data, error: null };
};
