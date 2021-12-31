// const axios = require('axios');

// // const {
// //   log,
// //   logInfo,
// //   logDebug,
// //   logWarn,
// //   logError,
// // } = require('./src/dev-helpers/console-Log');

// exports.sourceNodes = async ({
//   actions: { createNode },
//   createContentDigest,
// }) => {
//   const payload = {
//     action: 'get',
//     payload: {
//       forPresent: true,
//       name: 'Base Resume',
//     },
//   };

  // try {
  //   // get data from GitHub API at build time
  //   const result = await axios
  //     .get(`https://rezoomeapi.deta.dev/api/vi/resume_all/`, {
  //       params: { payload },
  //     })
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
  //   logInfo(`${actionType}`);
  //   if (data.status && data.status >= 200 && data.status < 300) {
  //     // logging
  //     logInfo(`${actionType} returned 200 -300`);
  //     logInfo(`${data.status}, ${data.statusText}`);

  //     console.log(data.data);
  //     actionResponse(data.data);
  //     handleWait(false);
  //   } else if (
  //     data.response &&
  //     data.response.status >= 400 &&
  //     data.response.status < 500
  //   ) {
  //     logError(
  //       `${data.response.status}, ${data.response.statusText}`
  //     );
  //     logWarn(`${actionType} 400 - 500`);
  //     handleWait(false);
  //     throw new Error(
  //       `${data.response.status}, ${data.response.statusText}`
  //     );
  //   } else {
  //     // 500
  //     logWarn(`${actionType} +500`);
  //     logError(
  //       `${data.response.status}, ${data.response.statusText}`
  //     );
  //     handleWait(false);
  //     throw new Error(
  //       `${data.response.status}, ${data.response.statusText}`
  //     );
  //   }
  // } catch (err) {
  //   logError(`${err}`);
  // }
  // create node for build time data example in the docs
//   createNode({
//     // nameWithOwner and url are arbitrary fields from the data
//     nameWithOwner: resultData.full_name,
//     url: resultData.html_url,
//     // required fields
//     id: `example-build-time-data`,
//     parent: null,
//     children: [],
//     internal: {
//       type: `Example`,
//       contentDigest: createContentDigest(resultData),
//     },
//   });
// };
