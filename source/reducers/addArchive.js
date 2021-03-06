import {
    ADD_ARCHIVE_CLEAR_PROGRESS,
    ADD_ARCHIVE_SET_ARCHIVE_TYPE,
    ADD_ARCHIVE_SET_CONNECTED,
    ADD_ARCHIVE_SET_CONNECTING,
    ADD_ARCHIVE_SET_DISCONNECTED,
    ADD_ARCHIVE_SET_PASSWORD,
    ADD_ARCHIVE_SET_URL,
    ADD_ARCHIVE_SET_USERNAME
} from "../actions/types.js";

const INITIAL = {
    archiveType: null,
    connection: "none",
    remoteURL: "",
    remoteUsername: "",
    remotePassword: ""
};

export default function addArchiveReducer(state = INITIAL, action = {}) {
    switch (action.type) {
        case ADD_ARCHIVE_SET_ARCHIVE_TYPE:
            return {
                ...state,
                archiveType: action.payload
            };
        case ADD_ARCHIVE_SET_CONNECTING:
            return {
                ...state,
                connection: "connecting"
            };
        case ADD_ARCHIVE_SET_CONNECTED:
            return {
                ...state,
                connection: "connected"
            };
        case ADD_ARCHIVE_SET_DISCONNECTED:
            return {
                ...state,
                connection: "none"
            };
        case ADD_ARCHIVE_SET_PASSWORD:
            return {
                ...state,
                remotePassword: action.payload
            };
        case ADD_ARCHIVE_SET_URL:
            return {
                ...state,
                remoteURL: action.payload
            };
        case ADD_ARCHIVE_SET_USERNAME:
            return {
                ...state,
                remoteUsername: action.payload
            };
        case ADD_ARCHIVE_CLEAR_PROGRESS:
            return INITIAL;

        default:
            return state;
    }
}
