import {Options} from 'react-toast-notifications';

export namespace Ui {
  export type FormName =
    | 'sign_up'
    | 'sign_in'
    | 'code_validate'
    | 'sos_create'
    | 'partner_list'
    | 'create_event'
    | 'reset_password_start'
    | 'reset_password_end'
    | 'change_event'
    | 'change_state_sos'
    | 'fetch_detail_sos'
    | 'fetch_detail_event'
    | 'fetch_detail_user'
    | 'show_current'
    | 'create_support';

  export type Loader = {
    name: FormName;
    loading: boolean;
  };

  export type Error = {
    name: FormName;
    message: string;
  };

  export type Callback = {
    toast?: (
      content: React.ReactNode,
      options?: Options | undefined,
      callback?: ((id: string) => void) | undefined,
    ) => void;
    navigate?: (...prams: any) => void;
  };
}
