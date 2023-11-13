import { gql, useMutation } from '@apollo/client';


export const editPhone = gql`
mutation EditPhoneNumber($pk_columns: phone_pk_columns_input!, $new_phone_number:String!) {
  update_phone_by_pk(pk_columns: $pk_columns, _set: {number: $new_phone_number}) {
    contact {
      id
      last_name
      first_name
      created_at
      phones {
        number
      }
    }
  }
}
`;

export const useEditPhone = (request: object) => {
    const [editP, { data, loading, error }] = useMutation(editPhone, { variables: request })
    if (loading) {
        return { editP: editP, loading: true, data: null, error: null };
    }

    if (error) {
        return { editP: editP, loading: false, data: null, error: `Error! ${error.message}` };
    }


    return { editP: editP, loading: false, data, error: null };
};
