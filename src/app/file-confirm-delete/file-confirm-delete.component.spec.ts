import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileConfirmDeleteComponent } from './file-confirm-delete.component';

describe('FileConfirmDeleteComponent', () => {
  let component: FileConfirmDeleteComponent;
  let fixture: ComponentFixture<FileConfirmDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileConfirmDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileConfirmDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
