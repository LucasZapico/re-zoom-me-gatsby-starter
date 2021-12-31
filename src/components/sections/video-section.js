// import React from 'react';
// import { Box, AspectRatio, Container } from '@chakra-ui/react';
// import { Link as GatsbyLink, graphql, useStaticQuery } from 'gatsby';
// import VideoSliderSection from './video-slider-section';

// const VideoSection = () => {
//   const { videos } = useStaticQuery(query);
//   console.log('vid', videos);
//   const featured = videos.edges.filter(
//     (v) => v.node.frontmatter.featured === true
//   );
//   console.log(featured);
//   const videoId =
//     featured[0].node.frontmatter.video_url.split('v=')[1];

//   return (
//     <Container maxW="container.xl">
//       <AspectRatio
//         margin="auto"
//         maxW="750px"
//         maxH="550px"
//         border="2px"
//         rounded="lg"
//         borderColor="gray.700"
//         ratio={1}
//       >
//         {/* <video>
//           <source
//             src={`https://www.youtube.com/embed/${videoId}`}
//             type="video/mp4"
//           />
//         </video> */}
//         <iframe
//           title={featured[0].node.frontmatter.title}
//           src={`https://www.youtube.com/embed/${videoId}`}
//           allowFullScreen
//         />
//       </AspectRatio>
//       <VideoSliderSection />
//     </Container>
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

// export default VideoSection;
