// 커스텀 예외 종류
export const KU_KEY_ERROR_LOG = {
  // 1xxx : 인증 관련 예외

  // - 10xx : 일반 인증 관련
  LOGIN_REQUIRED: {
    name: 'LOGIN_REQUIRED',
    message: 'Login required.',
    errorCode: 1000,
    statusCode: 401,
  },
  INVALID_EMAIL: {
    name: 'INVALID_EMAIL',
    message: 'Wrong email form.',
    errorCode: 1001,
    statusCode: 400,
  },
  INVALID_PASSWORD: {
    name: 'INVALID_PASSWORD',
    message: 'Wrong password.',
    errorCode: 1002,
    statusCode: 400,
  },
  VERIFY_TOKEN_NOT_FOUND: {
    name: 'VERIFY_TOKEN_NOT_FOUND',
    message: 'No verification token was sent to the provided email.',
    errorCode: 1003,
    statusCode: 404,
  },
  INVALID_VERIFY_TOKEN: {
    name: 'INVALID_VERIFY_TOKEN',
    message: 'Verification token does not match.',
    errorCode: 1004,
    statusCode: 401,
  },

  // - 11xx : 토큰 관련
  INVALID_ACCESS_TOKEN: {
    name: 'INVALID_ACCESS_TOKEN',
    message: 'Invalid access token.',
    errorCode: 1100,
    statusCode: 401,
  },
  ACCESS_TOKEN_EXPIRED: {
    name: 'ACCESS_TOKEN_EXPIRED',
    message: 'Access token expired. Please refresh.',
    errorCode: 1101,
    statusCode: 401,
  },
  INVALID_REFRESH_TOKEN: {
    name: 'INVALID_REFRESH_TOKEN',
    message: 'Invalid refresh token.',
    errorCode: 1102,
    statusCode: 401,
  },
  REFRESH_TOKEN_EXPIRED: {
    name: 'REFRESH_TOKEN_EXPIRED',
    message: 'Refresh token expired.',
    errorCode: 1103,
    statusCode: 401,
  },
  MISSING_AUTHORIZATION_HEADER: {
    name: 'MISSING_AUTHORIZATION_HEADER',
    message: 'Authorization header is missing.',
    errorCode: 1104,
    statusCode: 400,
  },
  INVALID_TOKEN_TYPE: {
    name: 'INVALID_TOKEN_TYPE',
    message: 'Invalid token type.',
    errorCode: 1105,
    statusCode: 400,
  },
  MISSING_TOKEN: {
    name: 'MISSING_TOKEN',
    message: 'Token is missing.',
    errorCode: 1106,
    statusCode: 400,
  },
  REFRESH_TOKEN_UPDATE_FAILED: {
    name: 'REFRESH_TOKEN_UPDATE_FAILED',
    message: 'Refresh token update failed.',
    errorCode: 1107,
    statusCode: 500,
  },
  REFRESH_TOKEN_NOT_MATCHED: {
    name: 'REFRESH_TOKEN_NOT_MATCHED',
    message: 'Refresh token does not match database.',
    errorCode: 1108,
    statusCode: 400,
  },

  // 2xxx : 유저 관련 예외

  // - 20xx : User
  USER_NOT_FOUND: {
    name: 'USER_NOT_FOUND',
    message: 'User not found.',
    errorCode: 2000,
    statusCode: 404,
  },
  USER_NOT_VERIFIED: {
    name: 'USER_NOT_VERIFIED',
    message: 'User not verified.',
    errorCode: 2001,
    statusCode: 401,
  },
  USER_VERIFICATION_FAILED: {
    name: 'USER_VERIFICATION_FAILED',
    message: 'User screenshot verification failed.',
    errorCode: 2002,
    statusCode: 500,
  },
  PASSWORD_UPDATE_FAILED: {
    name: 'PASSWORD_UPDATE_FAILED',
    message: 'User password update failed.',
    errorCode: 2003,
    statusCode: 500,
  },
  ADMIN_ONLY_ACCESSIBLE: {
    name: 'ADMIN_ONLY_ACCESSIBLE',
    message: 'Admin access only.',
    errorCode: 2004,
    statusCode: 403,
  },
  EMAIL_ALREADY_USED: {
    name: 'EMAIL_ALREADY_USED',
    message: 'Email already in use.',
    errorCode: 2005,
    statusCode: 409,
  },
  USERNAME_ALREADY_USED: {
    name: 'USERNAME_ALREADY_USED',
    message: 'Username already in use.',
    errorCode: 2006,
    statusCode: 409,
  },
  USER_DELETE_FAILED: {
    name: 'USER_DELETE_FAILED',
    message: 'User delete failed.',
    errorCode: 2007,
    statusCode: 500,
  },
  RE_REGISTRATION_NOT_ALLOWED: {
    name: 'RE_REGISTRATION_NOT_ALLOWED',
    message: 'Re-registration with the same email is not allowed within 7 days.',
    errorCode: 2008,
    statusCode: 409,
  },
  PROFILE_UPDATE_FAILED: {
    name: 'PROFILE_UPDATE_FAILED',
    message: 'User profile update failed.',
    errorCode: 2009,
    statusCode: 500,
  },
  INVALID_DATE_RANGE: {
    name: 'INVALID_DATE_RANGE',
    message: 'End date cannot be earlier than start date.',
    errorCode: 2010,
    statusCode: 400,
  },
  EXCHANGE_DAY_UPDATE_FAILED: {
    name: 'EXCHANGE_DAY_UPDATE_FAILED',
    message: 'Exchange day update failed.',
    errorCode: 2011,
    statusCode: 500,
  },
  SAME_PASSWORD: {
    name: 'SAME_PASSWORD',
    message: 'New password is the same as the old one.',
    errorCode: 2012,
    statusCode: 409,
  },
  LANGUAGE_LIMIT_EXCEEDED: {
    name: 'LANGUAGE_LIMIT_EXCEEDED',
    message: 'Up to 5 languages can be added.',
    errorCode: 2013,
    statusCode: 409,
  },
  LANGUAGE_ALREADY_EXIST: {
    name: 'LANGUAGE_ALREADY_EXIST',
    message: 'Language already exists.',
    errorCode: 2014,
    statusCode: 409,
  },
  LANGUAGE_NOT_FOUND: {
    name: 'LANGUAGE_NOT_FOUND',
    message: 'Language not found.',
    errorCode: 2015,
    statusCode: 404,
  },
  LANGUAGE_DELETE_FAILED: {
    name: 'LANGUAGE_DELETE_FAILED',
    message: 'Language delete failed.',
    errorCode: 2016,
    statusCode: 500,
  },

  // - 21xx : Point
  POINT_NOT_ENOUGH: {
    name: 'POINT_NOT_ENOUGH',
    message: "Don't have enough point.",
    errorCode: 2100,
    statusCode: 400,
  },
  ITEM_METADATA_MISSING: {
    name: 'ITEM_METADATA_MISSING',
    message: 'Item metadata is missing.',
    errorCode: 2101,
    statusCode: 400,
  },
  ITEM_POINT_NOT_MATCHED: {
    name: 'ITEM_POINT_NOT_MATCHED',
    message: 'Points do not match the required amount.',
    errorCode: 2102,
    statusCode: 400,
  },

  // - 22xx : Character
  CHARACTER_NOT_FOUND: {
    name: 'CHARACTER_NOT_FOUND',
    message: 'Character not found.',
    errorCode: 2200,
    statusCode: 404,
  },
  CHARACTER_ALREADY_EXIST: {
    name: 'CHARACTER_ALREADY_EXIST',
    message: 'Character already exists.',
    errorCode: 2201,
    statusCode: 409,
  },
  CHARACTER_LEVEL_ALREADY_MAX: {
    name: 'CHARACTER_LEVEL_ALREADY_MAX',
    message: 'Character is already at the maximum level.',
    errorCode: 2202,
    statusCode: 400,
  },
  CHARACTER_LEVEL_UPGRADE_FAILED: {
    name: 'CHARACTER_LEVEL_UPGRADE_FAILED',
    message: 'Character level upgrade failed.',
    errorCode: 2203,
    statusCode: 500,
  },
  CHARACTER_TYPE_CHANGE_FAILED: {
    name: 'CHARACTER_TYPE_CHANGE_FAILED',
    message: 'Character type change failed.',
    errorCode: 2204,
    statusCode: 500,
  },
  CHARACTER_LEVEL_NOT_UNLOCKED: {
    name: 'CHARACTER_LEVEL_NOT_UNLOCKED',
    message: 'Level is not unlocked.',
    errorCode: 2205,
    statusCode: 400,
  },
  CHARACTER_LEVEL_SELECT_FAILED: {
    name: 'CHARACTER_LEVEL_SELECT_FAILED',
    message: 'Character level select failed.',
    errorCode: 2206,
    statusCode: 500,
  },

  // - 23xx : AttendanceCheck
  ATTENDANCE_ALREADY_CHECKED: {
    name: 'ATTENDANCE_ALREADY_CHECKED',
    message: 'Attendance already checked for today.',
    errorCode: 2300,
    statusCode: 409,
  },

  // 3xxx : 시간표 관련 예외

  // - 30xx : Course
  COURSE_NOT_FOUND: {
    name: 'COURSE_NOT_FOUND',
    message: 'Course not found.',
    errorCode: 3000,
    statusCode: 404,
  },
  MAJOR_REQUIRED: {
    name: 'MAJOR_REQUIRED',
    message: 'Please enter your major.',
    errorCode: 3001,
    statusCode: 400,
  },
  COLLEGE_REQUIRED: {
    name: 'COLLEGE_REQUIRED',
    message: 'Please enter your college.',
    errorCode: 3002,
    statusCode: 400,
  },
  COURSE_ALREADY_EXIST: {
    name: 'COURSE_ALREADY_EXIST',
    message: 'Course already exists in the timetable.',
    errorCode: 3003,
    statusCode: 409,
  },
  COURSE_CONFLICT: {
    name: 'COURSE_CONFLICT',
    message: 'Course conflicts with existing courses or schedules.',
    errorCode: 3004,
    statusCode: 409,
  },

  // - 31xx : Schedule
  INVALID_TIME_RANGE: {
    name: 'INVALID_TIME_RANGE',
    message: 'End time cannot be earlier than start time.',
    errorCode: 3100,
    statusCode: 400,
  },
  SCHEDULE_CONFLICT: {
    name: 'SCHEDULE_CONFLICT',
    message: 'Schedule conflicts with existing courses or schedules.',
    errorCode: 3101,
    statusCode: 409,
  },
  SCHEDULE_NOT_FOUND: {
    name: 'SCHEDULE_NOT_FOUND',
    message: 'Schedule not found.',
    errorCode: 3102,
    statusCode: 404,
  },

  // - 32xx : Timetable
  TIMETABLE_NOT_FOUND: {
    name: 'TIMETABLE_NOT_FOUND',
    message: 'Timetable not found.',
    errorCode: 3200,
    statusCode: 404,
  },
  TIMETABLE_LIMIT_EXCEEDED: {
    name: 'TIMETABLE_LIMIT_EXCEEDED',
    message: 'Up to 3 timetables can be added.',
    errorCode: 3201,
    statusCode: 409,
  },
  ALREADY_MAIN_TIMETABLE: {
    name: 'ALREADY_MAIN_TIMETABLE',
    message: 'Timetable is already set as the main timetable.',
    errorCode: 3202,
    statusCode: 409,
  },

  // - 33xx : CourseReview
  VIEWABLE_UNTIL_UPDATE_FAILED: {
    name: 'VIEWABLE_UNTIL_UPDATE_FAILED',
    message: 'Course review reading key update failed.',
    errorCode: 3300,
    statusCode: 500,
  },
  COURSE_REVIEW_ALREADY_EXIST: {
    name: 'COURSE_REVIEW_ALREADY_EXIST',
    message: 'Already registered a course review for this course.',
    errorCode: 3301,
    statusCode: 409,
  },
  COURSE_REVIEW_NOT_VIEWABLE: {
    name: 'COURSE_REVIEW_NOT_VIEWABLE',
    message: 'You must purchase a Course Review Reading Key!',
    errorCode: 3302,
    statusCode: 403,
  },
  COURSE_REVIEW_NOT_FOUND: {
    name: 'COURSE_REVIEW_NOT_FOUND',
    message: 'Course review not found.',
    errorCode: 3303,
    statusCode: 404,
  },
  SELF_REVIEW_RECOMMENDATION_FORBIDDEN: {
    name: 'SELF_REVIEW_RECOMMENDATION_FORBIDDEN',
    message: 'Cannot recommend your own review.',
    errorCode: 3304,
    statusCode: 403,
  },

  // - 34xx : Friendship
  FRIENDSHIP_NOT_FOUND: {
    name: 'FRIENDSHIP_NOT_FOUND',
    message: 'Friendship not found.',
    errorCode: 3400,
    statusCode: 404,
  },
  FRIENDSHIP_REQUEST_TO_SELF: {
    name: 'FRIENDSHIP_REQUEST_TO_SELF',
    message: 'Cannot send a friend request to yourself.',
    errorCode: 3401,
    statusCode: 400,
  },
  FRIENDSHIP_ALREADY_EXIST: {
    name: 'FRIENDSHIP_ALREADY_EXIST',
    message: 'Already friends or request is pending acceptance.',
    errorCode: 3402,
    statusCode: 409,
  },
  FRIENDSHIP_ACCESS_FORBIDDEN: {
    name: 'FRIENDSHIP_ACCESS_FORBIDDEN',
    message: 'Access to this friendship request or related data is not allowed.',
    errorCode: 3403,
    statusCode: 403,
  },
  FRIENDSHIP_REQUEST_ALREADY_ACCEPTED: {
    name: 'FRIENDSHIP_REQUEST_ALREADY_ACCEPTED',
    message: 'Friendship request is already accepted.',
    errorCode: 3404,
    statusCode: 409,
  },
  FRIENDSHIP_REQUEST_NOT_ACCEPTED: {
    name: 'FRIENDSHIP_REQUEST_NOT_ACCEPTED',
    message: 'Friendship request is not accepted yet.',
    errorCode: 3405,
    statusCode: 400,
  },
  FRIENDSHIP_REQUEST_ACCEPT_FAILED: {
    name: 'FRIENDSHIP_REQUEST_ACCEPT_FAILED',
    message: 'Friendship request accept failed.',
    errorCode: 3406,
    statusCode: 500,
  },
  FRIENDSHIP_REQUEST_REJECT_FAILED: {
    name: 'FRIENDSHIP_REQUEST_REJECT_FAILED',
    message: 'Friendship request reject failed.',
    errorCode: 3407,
    statusCode: 500,
  },
  FRIENDSHIP_REQUEST_CANCEL_FAILED: {
    name: 'FRIENDSHIP_REQUEST_CANCEL_FAILED',
    message: 'Friendship request cancel failed.',
    errorCode: 3408,
    statusCode: 500,
  },
  FRIENDSHIP_DELETE_FAILED: {
    name: 'FRIENDSHIP_DELETE_FAILED',
    message: 'Friendship delete failed.',
    errorCode: 3409,
    statusCode: 500,
  },
  FRIEND_TIMETABLE_NOT_FOUND: {
    name: 'FRIEND_TIMETABLE_NOT_FOUND',
    message: "Friend's timetable not found.",
    errorCode: 3410,
    statusCode: 404,
  },

  // 4xxx : 커뮤니티 관련 예외

  // - 40xx : Board
  BOARD_NOT_FOUND: {
    name: 'BOARD_NOT_FOUND',
    message: 'Board not found.',
    errorCode: 4000,
    statusCode: 404,
  },

  // - 41xx : Post
  POST_NOT_FOUND: {
    name: 'POST_NOT_FOUND',
    message: 'Post not found.',
    errorCode: 4100,
    statusCode: 404,
  },
  POST_DELETED: {
    name: 'POST_DELETED',
    message: 'This post has been deleted.',
    errorCode: 4101,
    statusCode: 404,
  },
  TOO_MANY_IMAGES: {
    name: 'TOO_MANY_IMAGES',
    message: 'Only up to five images can be uploaded.',
    errorCode: 4102,
    statusCode: 400,
  },
  POST_OWNERSHIP_REQUIRED: {
    name: 'POST_OWNERSHIP_REQUIRED',
    message: 'Only the post author can edit or delete post.',
    errorCode: 4103,
    statusCode: 403,
  },
  POST_IN_QUESTION_BOARD: {
    name: 'POST_IN_QUESTION_BOARD',
    message: 'Cannot edit or delete answered post in question board.',
    errorCode: 4104,
    statusCode: 403,
  },
  POST_UPDATE_FAILED: {
    name: 'POST_UPDATE_FAILED',
    message: 'Post update failed.',
    errorCode: 4105,
    statusCode: 500,
  },
  POST_DELETE_FAILED: {
    name: 'POST_DELETE_FAILED',
    message: 'Post delete failed.',
    errorCode: 4106,
    statusCode: 500,
  },
  SELF_POST_SCRAP_FORBIDDEN: {
    name: 'SELF_POST_SCRAP_FORBIDDEN',
    message: 'Scrap is not allowed on your own post.',
    errorCode: 4107,
    statusCode: 403,
  },
  SCRAP_FAILED: {
    name: 'SCRAP_FAILED',
    message: 'Scrap failed.',
    errorCode: 4108,
    statusCode: 500,
  },
  SCRAP_CANCEL_FAILED: {
    name: 'SCRAP_CANCEL_FAILED',
    message: 'Scrap cancel failed.',
    errorCode: 4109,
    statusCode: 500,
  },
  SELF_POST_REACTION_FORBIDDEN: {
    name: 'SELF_POST_REACTION_FORBIDDEN',
    message: 'Reaction is not allowed on your own post.',
    errorCode: 4110,
    statusCode: 403,
  },
  REACT_FAILED: {
    name: 'REACT_FAILED',
    message: 'React failed.',
    errorCode: 4111,
    statusCode: 500,
  },
  SAME_REACTION: {
    name: 'SAME_REACTION',
    message: 'Same reaction.',
    errorCode: 4112,
    statusCode: 409,
  },
  REACTION_CHANGE_FAILED: {
    name: 'REACTION_CHANGE_FAILED',
    message: 'Reaction change failed.',
    errorCode: 4113,
    statusCode: 500,
  },

  // - 42xx : Comment
  INVALID_PARENT_COMMENT_REQUEST: {
    name: 'INVALID_PARENT_COMMENT_REQUEST',
    message: 'The provided parent comment ID is invalid or does not exist.',
    errorCode: 4200,
    statusCode: 400,
  },
  REPLY_TO_DIFFERENT_POST: {
    name: 'REPLY_TO_DIFFERENT_POST',
    message: "Cannot create other post's reply.",
    errorCode: 4201,
    statusCode: 400,
  },
  COMMENT_NOT_FOUND: {
    name: 'COMMENT_NOT_FOUND',
    message: 'Comment not found.',
    errorCode: 4202,
    statusCode: 404,
  },
  COMMENT_OWNERSHIP_REQUIRED: {
    name: 'COMMENT_OWNERSHIP_REQUIRED',
    message: 'Only the comment author can edit or delete post.',
    errorCode: 4203,
    statusCode: 403,
  },
  COMMENT_IN_QUESTION_BOARD: {
    name: 'COMMENT_IN_QUESTION_BOARD',
    message: 'Cannot edit or delete answered post in question board.',
    errorCode: 4204,
    statusCode: 403,
  },
  COMMENT_UPDATE_FAILED: {
    name: 'COMMENT_UPDATE_FAILED',
    message: 'Comment update failed.',
    errorCode: 4205,
    statusCode: 500,
  },
  COMMENT_DELETE_FAILED: {
    name: 'COMMENT_DELETE_FAILED',
    message: 'Comment delete failed.',
    errorCode: 4206,
    statusCode: 500,
  },
  SELF_COMMENT_LIKE_FORBIDDEN: {
    name: 'SELF_COMMENT_LIKE_FORBIDDEN',
    message: 'Cannot like my comment.',
    errorCode: 4207,
    statusCode: 403,
  },
  COMMENT_LIKE_CANCEL_FAILED: {
    name: 'COMMENT_LIKE_CANCEL_FAILED',
    message: 'Like cancel failed.',
    errorCode: 4208,
    statusCode: 500,
  },

  // - 43xx : Report
  REPORT_NOT_FOUND: {
    name: 'REPORT_NOT_FOUND',
    message: 'Report not found.',
    errorCode: 4300,
    statusCode: 404,
  },
  ALREADY_REPORTED: {
    name: 'ALREADY_REPORTED',
    message: 'Already Reported!',
    errorCode: 4301,
    statusCode: 409,
  },

  // 5xxx : 메인 홈 관련 예외

  // - 50xx : Club
  CLUB_NOT_FOUND: {
    name: 'CLUB_NOT_FOUND',
    message: 'Club not found.',
    errorCode: 5000,
    statusCode: 404,
  },
  CLUB_UPDATE_FAILED: {
    name: 'CLUB_UPDATE_FAILED',
    message: 'Club update failed.',
    errorCode: 5001,
    statusCode: 500,
  },
  CLUB_DELETE_FAILED: {
    name: 'CLUB_DELETE_FAILED',
    message: 'Club delete failed.',
    errorCode: 5002,
    statusCode: 500,
  },

  // - 51xx : Calendar
  CALENDAR_NOT_FOUND: {
    name: 'CALENDAR_NOT_FOUND',
    message: 'Calendar not found.',
    errorCode: 5100,
    statusCode: 404,
  },
  CALENDAR_UPDATE_FAILED: {
    name: 'CALENDAR_UPDATE_FAILED',
    message: 'Calendar update failed.',
    errorCode: 5101,
    statusCode: 500,
  },
  CALENDAR_DELETE_FAILED: {
    name: 'CALENDAR_DELETE_FAILED',
    message: 'Calendar delete failed.',
    errorCode: 5102,
    statusCode: 500,
  },

  // 6xxx : S3, File 관련 예외
  NOT_IMAGE_FILE: {
    name: 'NOT_IMAGE_FILE',
    message: 'Only image file can be uploaded.',
    errorCode: 6000,
    statusCode: 500,
  },
  FILE_UPLOAD_FAILED: {
    name: 'FILE_UPLOAD_FAILED',
    message: 'File upload failed.',
    errorCode: 6001,
    statusCode: 500,
  },
  FILE_DELETE_FAILED: {
    name: 'FILE_DELETE_FAILED',
    message: 'File delete failed.',
    errorCode: 6002,
    statusCode: 500,
  },
  FILE_METADATA_GET_FAILED: {
    name: 'FILE_METADATA_GET_FAILED',
    message: 'File metadata get failed.',
    errorCode: 6003,
    statusCode: 400,
  },

  // 7xxx : Class-Validator, TypeORM 관련 예외
  VALIDATION_ERROR: {
    name: 'VALIDATION_ERROR',
    message: 'Invalid input values.',
    errorCode: 7000,
    statusCode: 400,
  },
}
