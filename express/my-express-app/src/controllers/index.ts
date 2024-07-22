import { Request, Response } from 'express';

class IndexController {
  getIndex(req: Request, res: Response) {
    res.render('index');
  }
}

export default IndexController;