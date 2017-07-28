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
		POTOMACPICTURES,
		CHICKFILAPICTURES,
		ARLINGTONPICTURES,
		UNKNOWNPICTURES,
		METROPICTURES,
		SAKURAPICTURES,
		JERSEYPICTURES,
		JERSEYCITYPICTURES,
		WELCOMENYCPICTURES,
		KATZPICTURES,
		GATSBYPICTURES,
		EMPIRE80PICTURES 
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
    getChickFilAPictures(): Promise<Picture[]>{
        return Promise.resolve(CHICKFILAPICTURES);
    }
    getArlingtonPictures(): Promise<Picture[]>{
        return Promise.resolve(ARLINGTONPICTURES);
    }
    getUnknownPictures(): Promise<Picture[]>{
        return Promise.resolve(UNKNOWNPICTURES);
    }
    getMetroPictures(): Promise<Picture[]>{
        return Promise.resolve(METROPICTURES);
    }
    getSakuraPictures(): Promise<Picture[]>{
        return Promise.resolve(SAKURAPICTURES);
    }
    getJerseyPictures(): Promise<Picture[]>{
        return Promise.resolve(JERSEYPICTURES);
    }
    getJerseyCityPictures(): Promise<Picture[]>{
        return Promise.resolve(JERSEYCITYPICTURES);
    } 
    getWelcomeNycPictures(): Promise<Picture[]>{
        return Promise.resolve(WELCOMENYCPICTURES);
    }
    getKatzPictures(): Promise<Picture[]>{
        return Promise.resolve(KATZPICTURES);
    }
    getGatsbyPictures(): Promise<Picture[]>{
        return Promise.resolve(GATSBYPICTURES);
    }
    getEmpire80Pictures(): Promise<Picture[]>{
        return Promise.resolve(EMPIRE80PICTURES);
    }                                                                                         
}
