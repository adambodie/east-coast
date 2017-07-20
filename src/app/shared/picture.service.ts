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
		PRIDEPICTURES,
		CONTINENTALPICTURES,
		PENNPICTURES,
		ARTPICTURES,
		DANCEPICTURES,
		PHILLYPICTURES,
		CHIDOPICTURES,
		CAPITOLPICTURES,
		MALLPICTURES,
		ALIBIPICTURES,
		GEORGETOWNPICTURES,
		ITHAIPICTURES,
		POTOMACPICTURES 
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
    getContinentalPictures(): Promise<Picture[]>{
        return Promise.resolve(CONTINENTALPICTURES);
    }     
    getPennPictures(): Promise<Picture[]>{
        return Promise.resolve(PENNPICTURES);
    }
    getArtPictures(): Promise<Picture[]>{
        return Promise.resolve(ARTPICTURES);
    }
    getDancePictures(): Promise<Picture[]>{
        return Promise.resolve(DANCEPICTURES);
    }             
    getPhillyPictures(): Promise<Picture[]>{
        return Promise.resolve(PHILLYPICTURES);
    }
    getChidoPictures(): Promise<Picture[]>{
        return Promise.resolve(CHIDOPICTURES);
    }
    getCapitolPictures(): Promise<Picture[]>{
        return Promise.resolve(CAPITOLPICTURES);
    }
    getAlibiPictures(): Promise<Picture[]>{
        return Promise.resolve(ALIBIPICTURES);
    }
    getMallPictures(): Promise<Picture[]>{
        return Promise.resolve(MALLPICTURES);
    }    
    getGeorgetownPictures(): Promise<Picture[]>{
        return Promise.resolve(GEORGETOWNPICTURES);
    }             
    getIThaiPictures(): Promise<Picture[]>{
        return Promise.resolve(ITHAIPICTURES);
    }
    getPotomacPictures(): Promise<Picture[]>{
        return Promise.resolve(POTOMACPICTURES);
    }                                                
}
