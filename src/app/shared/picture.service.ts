import { Injectable } from '@angular/core';

import { Picture } from './picture';
import { 
		INTROPICTURES, 
		KEVINPICTURES, 
		BALTIMOREPICTURES, 
		PIERPICTURES, 
		DINERPICTURES, 
		DELAWAREPICTURES, 
		MARYLANDPICTURES, 
		PHILADELPHIAWELCOMEPICTURES, 
        INDEPENDENCEPICTURES,
        LIBERTYBELLPICTURES, 
		PRIDEPICTURES 
		} from './mock-pictures';


@Injectable()
export class PictureService {

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
    getMarylandPictures(): Promise<Picture[]>{
        return Promise.resolve(MARYLANDPICTURES);
    }
    getDelawarePictures(): Promise<Picture[]>{
        return Promise.resolve(DELAWAREPICTURES);
    }
    getPhiladelphiaPictures(): Promise<Picture[]>{
        return Promise.resolve(PHILADELPHIAWELCOMEPICTURES);
    }
    getIndependencePictures(): Promise<Picture[]>{
        return Promise.resolve(INDEPENDENCEPICTURES);
    }
    getLibertyBellPictures(): Promise<Picture[]>{
        return Promise.resolve(LIBERTYBELLPICTURES);
    }        
    getPridePictures(): Promise<Picture[]>{
        return Promise.resolve(PRIDEPICTURES);
    }                                 
}
