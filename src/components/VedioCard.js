import React from "react";

const VedioCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div>
      <div className="p-2 m-2 w-72 shadow-lg break-all">
        <img
          alt="thumnails"
          src={thumbnails.medium.url}
          className="rounded-lg"
        />
        <ul>
          <li className="font-bold py-2 ">{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} viewrs</li>
        </ul>
      </div>
    </div>
  );
};

//Higher order component
// const AdVedioCard = ({ info }) => {
//   return (
//     <div className="p-2">
//       <VedioCard info={info} />
//     </div>
//   );
// };

export default VedioCard;
