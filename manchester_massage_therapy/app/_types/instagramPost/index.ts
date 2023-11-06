export default interface IInstagramPost {
  imageUrls: string[];
  postUrl: string;
  description: string;
  uploadDate: string;
  prefAspectRatio: number;
}

export const defaultInstagramPost: IInstagramPost = {
  imageUrls: [
    'https://scontent-lhr8-2.cdninstagram.com/v/t51.2885-15/341191084_178486428386706_877512343705402209_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_cat=106&_nc_ohc=paKL_YEUHOsAX9vtpBu&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4Mjg4NzIwNDczMjE5Njc2Ng%3D%3D.2-ccb7-5&oh=00_AfC0ycK8M6y0PpKLu1DxYiOUzgmp9KuGRdHwYZqARF0HXg&oe=654C5200&_nc_sid=ee9879',
  ],
  postUrl: 'https://www.instagram.com/p/CrInZQwqNee/',
  description:
    'Got any aches and pains that don\'t seem to ease up?\n\n' +
    'Limited range of motion affecting your day to day life?\n\n' +
    'Or just looking ease off some tension?\n\n' +
    'Book in now and get a free consultation!',
  uploadDate: '17/04/23',
  prefAspectRatio: 1.0,
};

export const altInstagramPost: IInstagramPost = {
  imageUrls: [
    'https://scontent-lhr8-2.cdninstagram.com/v/t51.2885-15/341191084_178486428386706_877512343705402209_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_cat=106&_nc_ohc=paKL_YEUHOsAX9vtpBu&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4Mjg4NzIwNDczMjE5Njc2Ng%3D%3D.2-ccb7-5&oh=00_AfC0ycK8M6y0PpKLu1DxYiOUzgmp9KuGRdHwYZqARF0HXg&oe=654C5200&_nc_sid=ee9879',
  ],
  postUrl: 'https://www.instagram.com/p/CrInZQwqNee/',
  description:
    'Got any aches and pains that don\'t seem to ease up?\n\n' +
    'Limited range of motion affecting your day to day life?\n\n' +
    'Or just looking ease off some tension?\n\n' +
    'Book in now and get a free consultation!',
  uploadDate: '17/04/23',
  prefAspectRatio: 0.5,
};