// import React, { useState } from 'react';
// import {
//   Link,
//   AspectRatio,
//   Box,
//   Container,
//   Heading,
//   Text,
// } from '@chakra-ui/react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {
//   Link as GatsbyLink,
//   graphql,
//   useStaticQuery,
//   navigate,
// } from 'gatsby';
// import { generate } from 'shortid';
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   Thumbs,
//   A11y,
//   Autoplay,
// } from 'swiper';
// import { CardOne } from '../_index';

// SwiperCore.use([Navigation, Scrollbar, Pagination, A11y, Thumbs]);

// const VideoSliderSection = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const { videos } = useStaticQuery(query);
//   return (
//     <Box py={20}>
//       <Container maxW="container.xl" mb={10}>
//         <Heading as="h3" size="2xl" variant="alice">
//           Recent Videos
//         </Heading>
//         <Link as={GatsbyLink} to="/articles" variant="linkOne">
//           All videos
//         </Link>
//       </Container>
//       <Box ml={{ base: 0, md: 20, lg: 40 }}>
//         <Swiper
//           centeredSlides
//           thumbs={{ swiper: thumbsSwiper }}
//           className="video-slider"
//           onSlideChange={() => console.log('slide change')}
//           onSwiper={(swiper) => console.log('video', swiper)}
//         >
//           {videos.edges.map((video, i) => {
//             const videoId =
//               video.node.frontmatter.video_url.split('v=')[1];
//             return (
//               <SwiperSlide key={generate()}>
//                 <CardOne
//                   className="link"
//                   mt={6}
//                   maxW="750px"
//                   maxH="550px"
//                   onClick={() => {
//                     navigate(`/${video.node.fields.path}`);
//                   }}
//                 >
//                   <AspectRatio ratio={1}>
//                     <iframe
//                       title={video.node.frontmatter.title}
//                       src={`https://www.youtube.com/embed/${videoId}`}
//                       allowFullScreen
//                     />
//                   </AspectRatio>
//                 </CardOne>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//         <Swiper
//           onSwiper={setThumbsSwiper}
//           navigation
//           // preventClicks="false"
//           preventClicksPropagation="false"
//           pagination={{ clickable: true }}
//           scrollbar={{ draggable: false }}
//           breakpoints={{
//             320: { slidesPerView: 2, spaceBetween: 10 },
//             640: { slidesPerView: 2, spaceBetween: 10 },
//             840: { slidesPerView: 2, spaceBetween: 50 },
//             1040: { slidesPerView: 2, spaceBetween: 50 },
//             1400: { slidesPerView: 2, spaceBetween: 50 },
//           }}
//           freeMode
//           watchSlidesProgress
//           className="video-slider thumbs"
//         >
//           {videos.edges.map((video, i) => {
//             const videoId =
//               video.node.frontmatter.video_url.split('v=')[1];
//             return (
//               <SwiperSlide key={generate()}>
//                 <CardOne
//                   className="link"
//                   mt={6}
//                   // minH="20rem"
//                   maxW="25rem"
//                   // onClick={() => {
//                   //   navigate(`/${video.node.fields.path}`);
//                   // }}
//                   onClick={setThumbsSwiper}
//                 >
//                   <AspectRatio ratio={1}>
//                     <iframe
//                       title={video.node.frontmatter.title}
//                       src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
//                       allowFullScreen
//                     />
//                   </AspectRatio>
//                 </CardOne>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </Box>
//     </Box>
//   );
// };

// export const query = graphql`
//   query {
//     videos: allMarkdownRemark(
//       filter: { fileAbsolutePath: { regex: "/videos/" } }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             video_url
//             description
//             categories
//             tags
//             featured
//           }
//         }
//       }
//     }
//   }
// `;

// export default VideoSliderSection;
