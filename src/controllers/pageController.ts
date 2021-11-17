import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  // res.render('pages/page');
  res.send('Home no controller');
};

export const dogs = (req: Request, res: Response) => {
  // res.render('pages/page');
};

export const cats = (req: Request, res: Response) => {
  // res.render('pages/page');
};

export const fishes = (req: Request, res: Response) => {
  // res.render('pages/page');
};
