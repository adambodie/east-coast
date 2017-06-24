import { Injectable } from '@angular/core';

import { Picture } from './picture';
import { PICTURES } from './mock-pictures';
import { INTROPICTURES } from './intro-pictures';

@Injectable()
export class PictureService {
    getPictures(): Promise<Picture[]>{
        return Promise.resolve(PICTURES);
    }
    getIntroPictures(): Promise<Picture[]>{
        return Promise.resolve(INTROPICTURES);
    }
}
