import { Injectable } from '@angular/core';

import { Picture } from './picture';
import { PICTURES, INTROPICTURES, KEVINPICTURES, BALTIMOREPICTURES, PIERPICTURES, DINERPICTURES } from './mock-pictures';


@Injectable()
export class PictureService {
    getPictures(): Promise<Picture[]>{
        return Promise.resolve(PICTURES);
    }
    getIntroPictures(): Promise<Picture[]>{
        return Promise.resolve(INTROPICTURES);
    }
    getKevinPictures(): Promise<Picture[]>{
        return Promise.resolve(KEVINPICTURES);
    }    
    getBaltimorePictures(): Promise<Picture[]>{
        return Promise.resolve(BALTIMOREPICTURES);
    }
    getPierPictures(): Promise<Picture[]>{
        return Promise.resolve(PIERPICTURES);
    }
    getDinerPictures(): Promise<Picture[]>{
        return Promise.resolve(DINERPICTURES);
    }                 
}
