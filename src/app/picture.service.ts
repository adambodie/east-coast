import { Injectable } from '@angular/core';

import { Picture } from './picture';
import { PICTURES } from './mock-pictures';

@Injectable()
export class PictureService {
    getPictures(): Promise<Picture[]>{
        return Promise.resolve(PICTURES);
    }
}