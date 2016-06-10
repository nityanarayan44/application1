import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Application1AppComponent } from '../app/application1.component';

beforeEachProviders(() => [Application1AppComponent]);

describe('App: Application1', () => {
  it('should create the app',
      inject([Application1AppComponent], (app: Application1AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'application1 works!\'',
      inject([Application1AppComponent], (app: Application1AppComponent) => {
    expect(app.title).toEqual('application1 works!');
  }));
});
