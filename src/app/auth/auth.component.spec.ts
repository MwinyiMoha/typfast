import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AuthComponent]
    })
      .compileComponents();
  });

  it('should create the auth component', () => {
    const fixture = TestBed.createComponent(AuthComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
