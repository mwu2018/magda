// @flow
export const actionTypes = {
  SET_URL_QUERY: "SET_URL_QUERY",
  REQUEST_RESULTS: "REQUEST_RESULTS",
  RECEIVE_RESULTS: "RECEIVE_RESULTS",
  FETCH_ERROR: "FETCH_ERROR",
  RESET_DATASET_SEARCH: "RESET_DATASET_SEARCH",

  ADD_PUBLISHER: "ADD_PUBLISHER",
  REMOVE_PUBLISHER: "REMOVE_PUBLISHER",
  RESET_PUBLISHER: "RESET_PUBLISHER",

  ADD_REGION: "ADD_REGION",
  RESET_REGION: "RESET_REGION",

  SET_DATE_FROM: "SET_DATE_FROM",
  SET_DATE_TO: "SET_DATE_TO",
  RESET_DATE_FROM: "RESET_DATE_FROM",
  RESET_DATE_TO: "RESET_DATE_TO",

  ADD_FORMAT: "ADD_FORMAT",
  REMOVE_FORMAT: "REMOVE_FORMAT",
  RESET_FORMAT: "RESET_FORMAT",

  FACET_REQUEST_FORMATS: "FACET_REQUEST_FORMATS",
  FACET_RECEIVE_FORMATS: "FACET_RECEIVE_FORMATS",

  FACET_REQUEST_PUBLISHERS: "FACET_REQUEST_PUBLISHERS",
  FACET_RECEIVE_PUBLISHERS: "FACET_RECEIVE_PUBLISHERS",

  FACET_REQUEST_REGIONS: "FACET_REQUEST_REGIONS",
  FACET_RECEIVE_REGIONS: "FACET_RECEIVE_REGIONS",

  REQUEST_REGION_MAPPING: "REQUEST_REGION_MAPPING",
  RECEIVE_REGION_MAPPING: "RECEIVE_REGION_MAPPING",
  REQUEST_REGION_MAPPING_ERROR: "REQUEST_REGION_MAPPING_ERROR",

  REQUEST_DATASET: "REQUEST_DATASET",
  RECEIVE_DATASET: "RECEIVE_DATASET",
  REQUEST_DATASET_ERROR: "REQUEST_DATASET_ERROR",

  REQUEST_PREVIEW_DATA: "REQUEST_PREVIEW_DATA",
  RECEIVE_PREVIEW_DATA: "RECEIVE_PREVIEW_DATA",
  REQUEST_PREVIEW_DATA_ERROR: "REQUEST_PREVIEW_DATA_ERROR",
  RESET_PREVIEW_DATA: "RESET_PREVIEW_DATA",

  REQUEST_DISTRIBUTION: "REQUEST_DISTRIBUTION",
  RECEIVE_DISTRIBUTION: "RECEIVE_DISTRIBUTION",
  REQUEST_DISTRIBUTION_ERROR: "REQUEST_DISTRIBUTION_ERROR",

  REQUEST_PROJECTS: "REQUEST_PROJECTS",
  RECEIVE_PROJECTS: "RECEIVE_PROJECTS",
  REQUEST_PROJECTS_ERROR: "REQUEST_PROJECTS_ERROR",

  REQUEST_PROJECT: "REQUEST_PROJECT",
  RECEIVE_PROJECT: "RECEIVE_PROJECT",
  REQUEST_PROJECT_ERROR: "REQUEST_PROJECT_ERROR",

  REQUEST_NEWS: "REQUEST_NEWS",
  RECEIVE_NEWS: "RECEIVE_NEWS",
  REQUEST_NEWS_ERROR: "REQUEST_NEWS_ERROR",

  //Create new project
  CREATE_PROJECT: "CREATE_PROJECT",
  CREATE_PROJECT_SUCCESS: "CREATE_PROJECT_SUCCESS",
  CREATE_PROJECT_FAILURE: "CREATE_PROJECT_FAILURE",

  // Update existing project
  UPDATE_PROJECT: "UPDATE_PROJECT",
  UPDATE_PROJECT_SUCCESS: "UPDATE_PROJECT_SUCCESS",
  UPDATE_PROJECT_FAILURE: "UPDATE_PROJECT_FAILURE",

  //Validate project fields like Title
  VALIDATE_PROJECT_FIELDS: "VALIDATE_PROJECT_FIELDS",
  VALIDATE_PROJECT_FIELDS_FAILURE: "VALIDATE_PROJECT_FIELDS_FAILURE",
  RESET_PROJECT_FIELDS: "RESET_PROJECT_FIELDS",

  REQUEST_PUBLISHERS: "REQUEST_PUBLISHERS",
  RECEIVE_PUBLISHERS: "RECEIVE_PUBLISHERS",
  REQUEST_PUBLISHERS_ERROR: "REQUEST_PUBLISHERS_ERROR",

  REQUEST_WHO_AM_I: "REQUEST_WHO_AM_I",
  RECEIVE_WHO_AM_I_SIGNED_IN: "RECEIVE_WHO_AM_I_SIGNED_IN",
  RECEIVE_WHO_AM_I_SIGNED_OUT: "RECEIVE_WHO_AM_I_SIGNED_OUT",
  RECEIVE_WHO_AM_I_ERROR: "RECEIVE_WHO_AM_I_ERROR",

  // manage connectors
  REQUEST_CONNECTORS: "REQUEST_CONNECTORS",
  RECEIVE_CONNECTORS: "RECEIVE_CONNECTORS",
  REQUEST_CONNECTORS_ERROR: "REQUEST_CONNECTORS_ERROR",

  // Update CONNECTOR
  UPDATE_CONNECTOR: "UPDATE_CONNECTOR",
  UPDATE_CONNECTOR_SUCCESS: "UPDATE_CONNECTOR_SUCCESS",
  UPDATE_CONNECTOR_FAILURE: "UPDATE_CONNECTOR_FAILURE",


  // Update CONNECTOR
  CREATE_CONNECTOR: "CREATE_CONNECTOR",
  CREATE_CONNECTOR_SUCCESS: "CREATE_CONNECTOR_SUCCESS",
  CREATE_CONNECTOR_ERROR: "CREATE_CONNECTOR_ERROR",
  RESET_CREATE_CONNECTOR: "RESET_CREATE_CONNECTOR",

  SIGN_UP: "SIGN_UP",
  SIGN_IN: "SIGN_IN",
  SIGNED_IN: "SIGNED_IN",
  SIGN_OUT: "SIGN_OUT",
  SIGNED_OUT: "SIGNED_OUT",

  REQUEST_PUBLISHER: "REQUEST_PUBLISHER",
  RECEIVE_PUBLISHER: "RECEIVE_PUBLISHER",
  REQUEST_PUBLISHER_ERROR: "REQUEST_PUBLISHER_ERROR",

  REQUEST_FEATURED_DATASETS: "REQUEST_FEATURED_DATASETS",
  RECEIVE_FEATURED_DATASETS: "RECEIVE_FEATURED_DATASETS",
  REQUEST_FEATURED_DATASETS_ERROR: "REQUEST_FEATURED_DATASETS_ERROR",

  REQUEST_FEATURED_PUBLISHERS: "REQUEST_FEATURED_PUBLISHERS",
  RECEIVE_FEATURED_PUBLISHERS: "RECEIVE_FEATURED_PUBLISHERS",

  REQUEST_DATASET_COUNT: "REQUEST_DATASET_COUNT",
  RECEIVE_DATASET_COUNT: "RECEIVE_DATASET_COUNT",
  FETCH_DATASET_COUNT_ERROR: "FETCH_DATASET_COUNT_ERROR",

  REQUEST_DISCUSSION_FOR_TYPE: "REQUEST_DISCUSSION_FOR_TYPE",
  RECEIVE_DISCUSSION_FOR_TYPE: "RECEIVE_DISCUSSION_FOR_TYPE",
  RECEIVE_DISCUSSION_FOR_TYPE_ERROR: "RECEIVE_DISCUSSION_FOR_TYPE_ERROR",

  REQUEST_MESSAGES: "REQUEST_MESSAGES",
  RECEIVE_MESSAGES: "RECEIVE_MESSAGES",
  RECEIVE_MESSAGES_ERROR: "RECEIVE_MESSAGES_ERROR",
  SEND_MESSAGE: "SEND_MESSAGE",
  SEND_MESSAGE_ERROR: "SEND_MESSAGE_ERROR",

  REQUEST_SIGN_OUT: "REQUEST_SIGN_OUT",
  COMPLETED_SIGN_OUT: "COMPLETED_SIGN_OUT",
  SIGN_OUT_ERROR: "SIGN_OUT_ERROR",

  REQUEST_AUTH_PROVIDERS: "REQUEST_AUTH_PROVIDERS",
  RECEIVE_AUTH_PROVIDERS: "RECEIVE_AUTH_PROVIDERS",
  RECEIVE_AUTH_PROVIDERS_ERROR: "RECEIVE_AUTH_PROVIDERS_ERROR"
};
