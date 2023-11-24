import { GoogleReview, IGPost, Practitioner, Therapy } from "@prisma/client";

export const emptyPractitioner: Practitioner = {
  uid: -1,
  firstName: '',
  surname: '',
  joinDate: new Date(Date.now()),
  message: '',
  profilePhotoUrl: '',
  altPhotoUrl: '',
  expertIn: [],
  favorite: -1,
}

export const emptyTherapy: Therapy = {
  uid: -1,
  name: '',
  description: '',
  coverImageUrl: '',
  bookingUrl: '',
  recommendations: [],
}

export const emptyIGPost: IGPost = {
  uid: -1,
  caption: '',
  albumUrls: [],
  uploadDate: new Date(Date.now()),
  prefAspectRatio: 9/16,
  postUrl: '',
}

export const emptyGoogleReview: GoogleReview = {
  uid: '',
  profilePhotoUrl: '',
  displayName: '',
  isAnonymous: false,
  rating: 5,
  comment: '',
  createTime: new Date(Date.now()),
}