export enum Routes {
  HOME = '/',
  //PUBLIC
  CONFIRM_CODE = '/confirm-code',
  CONFIRM_RESET_PASSWORD = '/confirm-restore-password',
  PARTNERS = '/partners',
  PARTNERS_MAP = '/partners/map',
  PARTNERS_DETAIL = '/partners/:id',
  USER = '/profile/:id',
  EVENT_DETAIL = '/event/:id',
  EVENT_CREATE = '/event/create',
  SOS_CREATE = '/sos',
  SOS_DETAIL = '/sos/:id',
  //PRIVATE
  PROFILE = '/profile',
  FEEDBACK = '/feedback',
  //AUTH
  LOGIN = '/login',
  REGISTER = '/register',
  RESTORE_PASSWORD = '/restore-password',
}
