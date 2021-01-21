import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GameComponent } from './game.component';

describe('GameComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [GameComponent]
    })
      .compileComponents();
  });

  it('should create the game component', () => {
    const fixture = TestBed.createComponent(GameComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
