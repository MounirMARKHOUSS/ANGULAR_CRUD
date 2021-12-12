import { JoueurService } from 'src/service/Joueur.service';
import{TestBed} from'@angular/core/testing';

describe('JoueurService',()=>{

beforeEach(()=> TestBed.configureTestingModule({}));

it('should be created',()=>{
const service: JoueurService = TestBed.get(JoueurService);
expect(service).toBeTruthy();

});




});