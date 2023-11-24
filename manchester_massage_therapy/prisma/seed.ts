import { GoogleReview, IGPost, Practitioner, PrismaClient, Therapy } from "@prisma/client"
import { randomInt } from "crypto"

const prisma = new PrismaClient()

async function addPractitioner(practitioner: Practitioner) {
  await prisma.practitioner.upsert({
    where: {uid: practitioner.uid},
    update: {},
    create: practitioner
  })
}

async function addTherapy(therapy: Therapy) {
  await prisma.therapy.upsert({
    where: {uid: therapy.uid},
    update: {},
    create: therapy
  })
}

async function addIGPost(igPost: IGPost) {
  await prisma.iGPost.upsert({
    where: {uid: igPost.uid},
    update: {},
    create: igPost
  })
}

async function addGoogleReview(googleReview: GoogleReview) {
  await prisma.googleReview.upsert({
    where: {uid: googleReview.uid},
    update: {},
    create: googleReview
  })
}

async function main() {
  // empty database
  await prisma.practitioner.deleteMany();
  await prisma.therapy.deleteMany();
  await prisma.iGPost.deleteMany();
  await prisma.googleReview.deleteMany();

  for (let i = 1; i < 6; i++) {
    await addPractitioner({
      uid: i,
      firstName: 'Lucas',
      surname: 'Socha',
      joinDate: new Date(2001, 9, 11, 11, 59, 59, 0),
      message: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique ornare dolor, sed dignissim ex aliquam vitae. Nam facilisis vitae nisl nec semper. Nullam non enim sit amet diam vulputate fermentum eget ac quam. Praesent euismod dui eu mi suscipit venenatis. Nulla maximus ipsum sagittis justo tincidunt viverra eget cursus mi. Suspendisse a purus nunc. Sed ac posuere nisl. Ut at dolor vel nunc rhoncus tempor facilisis id odio. Aliquam porttitor, ligula quis gravida condimentum, metus metus volutpat dolor, vitae tincidunt lacus lorem id sapien. Quisque sit amet gravida lectus, eget lobortis ipsum. Mauris faucibus placerat nisi vel pulvinar. Praesent ut sem in diam eleifend porttitor. Proin ac sagittis est.\n\nInterdum et malesuada fames ac ante ipsum primis in faucibus. In mollis elementum mauris, ornare malesuada dui congue vitae. Vivamus pretium lacus ac diam porttitor, eget ornare ipsum laoreet. Nunc turpis ipsum, luctus id feugiat sed, bibendum in sem. Maecenas ut tempor eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ipsum dolor, euismod molestie enim nec, cursus dapibus erat. ',
      profilePhotoUrl: '/assets/masseuse/placeholder.jpg',
      expertIn: [1],
      favorite: 1,
      altPhotoUrl: null
    })
  }

  for (let i = 1; i < 6; i++) {
    await addTherapy({
      uid: i,
      name: `Massage ${i}`,
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique ornare dolor, sed dignissim ex aliquam vitae. Nam facilisis vitae nisl nec semper. Nullam non enim sit amet diam vulputate fermentum eget ac quam. Praesent euismod dui eu mi suscipit venenatis. Nulla maximus ipsum sagittis justo tincidunt viverra eget cursus mi. Suspendisse a purus nunc. Sed ac posuere nisl. Ut at dolor vel nunc rhoncus tempor facilisis id odio. Aliquam porttitor, ligula quis gravida condimentum, metus metus volutpat dolor, vitae tincidunt lacus lorem id sapien. Quisque sit amet gravida lectus, eget lobortis ipsum. Mauris faucibus placerat nisi vel pulvinar. Praesent ut sem in diam eleifend porttitor. Proin ac sagittis est.\n\nInterdum et malesuada fames ac ante ipsum primis in faucibus. In mollis elementum mauris, ornare malesuada dui congue vitae. Vivamus pretium lacus ac diam porttitor, eget ornare ipsum laoreet. Nunc turpis ipsum, luctus id feugiat sed, bibendum in sem. Maecenas ut tempor eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ipsum dolor, euismod molestie enim nec, cursus dapibus erat. ',
      coverImageUrl: '/assets/masseuse/placeholder.jpg',
      bookingUrl: 'https://google.com',
      recommendations: []
    })
  }

  for (let i = 1; i < 21; i++) {
    await addIGPost({
      uid: i,
      caption: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique ornare dolor, sed dignissim ex aliquam vitae. Nam facilisis vitae nisl nec semper. Nullam non enim sit amet diam vulputate fermentum eget ac quam. Praesent euismod dui eu mi suscipit venenatis. Nulla maximus ipsum sagittis justo tincidunt viverra eget cursus mi. Suspendisse a purus nunc. Sed ac posuere nisl. Ut at dolor vel nunc rhoncus tempor facilisis id odio. Aliquam porttitor, ligula quis gravida condimentum, metus metus volutpat dolor, vitae tincidunt lacus lorem id sapien. Quisque sit amet gravida lectus, eget lobortis ipsum. Mauris faucibus placerat nisi vel pulvinar. Praesent ut sem in diam eleifend porttitor. Proin ac sagittis est.\n\nInterdum et malesuada fames ac ante ipsum primis in faucibus. In mollis elementum mauris, ornare malesuada dui congue vitae. Vivamus pretium lacus ac diam porttitor, eget ornare ipsum laoreet. Nunc turpis ipsum, luctus id feugiat sed, bibendum in sem. Maecenas ut tempor eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ipsum dolor, euismod molestie enim nec, cursus dapibus erat. ',
      albumUrls: Array<string>(randomInt(1, 5)).fill('https://scontent-lhr8-2.cdninstagram.com/v/t51.2885-15/341191084_178486428386706_877512343705402209_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent-lhr8-2.cdninstagram.com&_nc_cat=106&_nc_ohc=GnDddeC81PsAX-gSrEI&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzA4Mjg4NzIwNDczMjE5Njc2Ng%3D%3D.2-ccb7-5&oh=00_AfBN5f9wlzkHomzVJ6X3rPvMjNwrHrxx2paAW0hi-PfXLQ&oe=6562BB80&_nc_sid=ee9879'),
      uploadDate: new Date(2001, 9, 11, 11, 59, 59, 0),
      prefAspectRatio: randomInt(40, 100) / 100,
      postUrl: 'https://www.instagram.com/p/CrInZQwqNee/'
    })
  }

  for (let i = 1; i < 5; i++) {
    await addGoogleReview({
      uid: `ggrv${i}`,
      profilePhotoUrl: '/blankProfile.jpg',
      displayName: 'John Doe',
      isAnonymous: false,
      rating: randomInt(3, 5),
      comment: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique ornare dolor, sed dignissim ex aliquam vitae. Nam facilisis vitae nisl nec semper. Nullam non enim sit amet diam vulputate fermentum eget ac quam. Praesent euismod dui eu mi suscipit venenatis. Nulla maximus ipsum sagittis justo tincidunt viverra eget cursus mi. Suspendisse a purus nunc. Sed ac posuere nisl. Ut at dolor vel nunc rhoncus tempor facilisis id odio. Aliquam porttitor, ligula quis gravida condimentum, metus metus volutpat dolor, vitae tincidunt lacus lorem id sapien. Quisque sit amet gravida lectus, eget lobortis ipsum. Mauris faucibus placerat nisi vel pulvinar. Praesent ut sem in diam eleifend porttitor. Proin ac sagittis est.\n\nInterdum et malesuada fames ac ante ipsum primis in faucibus. In mollis elementum mauris, ornare malesuada dui congue vitae. Vivamus pretium lacus ac diam porttitor, eget ornare ipsum laoreet. Nunc turpis ipsum, luctus id feugiat sed, bibendum in sem. Maecenas ut tempor eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ipsum dolor, euismod molestie enim nec, cursus dapibus erat. ',
      createTime: new Date(2001, 9, 11, 11, 59, 59, 0),
    })
  }
}

main().then(() => prisma.$disconnect()).catch(async (e) => {
  console.log(e)
  await prisma.$disconnect()
  process.exit(1)
})