/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import cn from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";

import Colors from "app_constants/colors";
import { SEARCH_QUERY_DELAY } from "app_constants/general";
import { APP_NAME } from "app_constants/general";
import { getMovies } from "store/actions/movies";
import { mobileTablet } from "utils/breakpoints";
import { getURLParam, isEnterPressed } from "utils/general";

const Navbar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);
  const isMobileTablet = useMediaQuery(mobileTablet);
  const history = useHistory();
  const query = getURLParam("query");

  useEffect(() => {
    if (query)
      setTimeout(() => {
        setValue(query);
      }, SEARCH_QUERY_DELAY);
  }, []);

  const active = useMemo(() => focused || !isEmpty(value), [focused, value]);

  const handleSubmit = () => {
    if (!isEmpty(value)) history.push(`/?query=${value}`);
  };

  return (
    <Styled isMobileTablet={isMobileTablet}>
      <Link
        to="/"
        className="link"
        onClick={() => {
          setValue("");
          dispatch(getMovies());
        }}
      >
        <h3 className="logo">{APP_NAME}</h3>
      </Link>
      <div className="search">
        <FontAwesomeIcon
          icon={faSearch}
          className="searchIcon"
          onClick={handleSubmit}
        />

        <input
          type="text"
          placeholder="Search..."
          className={cn("input", {
            "input--active": !isMobileTablet && active,
          })}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => (isEnterPressed(e) ? handleSubmit() : null)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value}
        />
      </div>
    </Styled>
  );
};

const Styled = styled.div<StyledProps>`
  display: flex;
  flex-direction: ${({ isMobileTablet }) =>
    isMobileTablet ? "column" : "row"};
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  background-color: ${Colors.SECONDARY};

  .logo {
    margin: 0 0 1rem 0;
    ${({ isMobileTablet }) => !isMobileTablet && `width: 5rem; margin: 0;`}
    color: ${Colors.WHITE};
  }
  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    ${({ isMobileTablet }) => !isMobileTablet && `margin-left: auto;`}

    .searchIcon {
      color: ${Colors.WHITE};
      cursor: pointer;
      font-size: 1.3rem;
      -webkit-tap-highlight-color: transparent;
    }
    .input {
      border-radius: 15px;
      border: 1.8px solid ${Colors.WHITE};
      padding: 0.5rem;
      margin-left: 0.8rem;
      width: ${({ isMobileTablet }) => (isMobileTablet ? "15rem" : "13rem")};
      transition: all 0.2s linear;
      font-weight: bold;
      outline: none;
      &--active {
        width: 20rem;
      }
    }
  }
`;

type StyledProps = {
  isMobileTablet: boolean;
};

export default Navbar;
