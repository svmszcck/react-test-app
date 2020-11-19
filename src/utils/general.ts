import { KeyboardEvent } from "react";
import { ENTER_KEY } from "app_constants/general";

export const imageAsyncLoader = (url: string): Promise<boolean> => {
  const img = new Image();

  return new Promise((res, rej) => {
    img.onload = () => {
      res(true);
    };
    img.src = url;
  });
};

export const getURLParam = (param: string): string | undefined => {
  const urlParams = new URLSearchParams(window.location.search);
  const response = urlParams.get(param);
  if (response) return response;
};

export const isEnterPressed = (e: KeyboardEvent<HTMLInputElement>): boolean => {
  return e.keyCode === ENTER_KEY;
};
