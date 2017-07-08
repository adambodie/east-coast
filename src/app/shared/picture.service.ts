import { Injectable } from '@angular/core';

import { Picture } from './picture';
import { PICTURES, INTROPICTURES, BALTIMOREPICTURES, PIERPICTURES } from './mock-pictures';


@Injectable()
export class PictureService {
    getPictures(): Promise<Picture[]>{
        return Promise.resolve(PICTURES);
    }
    getIntroPictures(): Promise<Picture[]>{
        return Promise.resolve(INTROPICTURES);
    }
    getBaltimorePictures(): Promise<Picture[]>{
        return Promise.resolve(BALTIMOREPICTURES);
    }
    getPierPictures(): Promise<Picture[]>{
        return Promise.resolve(PIERPICTURES);
    }         
}
