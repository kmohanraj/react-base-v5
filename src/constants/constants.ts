const CONSTANTS = {
  ROLES: {
    ADMIN: "admin",
    USER: "user",
    GUEST: "guest",
  },
  ACTION_BTN: {
    EDIT: "Edit",
    DELETE: "Delete",
    CREATE: "Create",
  },
  SESSION_STORAGE: {
    ROLE_KEY: "currentUserRole",
    USER_ID_KEY: "currentUserId",
    NAME_KEY: "currentUserName",
    AUTH_TOKEN_KEY: "currentUserAuthToken",
    IS_FIRST_LOGIN: "isFirstLogin",
    CURRENT_ORG_ID: "currentOrgId",
    CURRENT_MANAGE_CUSTOMER_ID: "current_manage_customer_id",
    LOGO: "org_logo",
  },
  STATUS_CODE: {
    STATUS_200: 200,
    STATUS_204: 204,
    STATUS_400: 400,
    STATUS_401: 401,
    STATUS_403: 403,
    STATUS_409: 409,
    STATUS_500: 500,
    STATUS_404: 404,
  },
};

export default CONSTANTS;
