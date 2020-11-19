import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Rating } from "@material-ui/lab";

import { RATING_PRECISION } from "app_constants/general";
import { parseScore } from "utils/parsing";
import { mobileTablet } from "utils/breakpoints";

const Card = ({ img, title, score, slug, className }: CardProps) => {
  const isMobileTablet = useMediaQuery(mobileTablet);
  const movieURL = `/movie/${slug}`;

  return (
    <Styled isMobileTablet={isMobileTablet} className={className}>
      <Link to={movieURL} className="link">
        <img src={img} alt={title} className="movieImg" />
      </Link>
      <div className="bottomSection">
        <Link to={movieURL} className="link">
          <p className="title">{title}</p>
        </Link>
        <Rating
          name="read-only"
          value={parseScore(score)}
          readOnly
          precision={RATING_PRECISION}
        />
      </div>
    </Styled>
  );
};

const Styled = styled.div<StyledProps>`
  width: ${({ isMobileTablet }) => (isMobileTablet ? "10rem" : "16rem")};
  min-width: ${({ isMobileTablet }) => (isMobileTablet ? "10rem" : "16rem")};

  .movieImg {
    width: 100%;
    height: ${({ isMobileTablet }) => (isMobileTablet ? "6rem" : "10rem")};
    object-fit: cover;
    border-radius: 10px;
  }
  .bottomSection {
    .title {
      font-weight: bold;
      margin: 0.5rem 0 0.5rem 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

type CardProps = {
  img: string;
  title: string;
  score: number;
  className: string;
  slug: string;
};

type StyledProps = {
  isMobileTablet: boolean;
};

export default Card;
