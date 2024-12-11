import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  files = [
    { fileName: 'Test 1', fileType: 'Report', fileSubType: 'NIV Report', predictedFileType: 'Letter', predictedSubFileType: 'Letter', score: 80 },
    { fileName: 'Test 2', fileType: 'Report', fileSubType: 'NIV Report', predictedFileType: 'Letter', predictedSubFileType: 'Letter', score: 86 },
    { fileName: 'Test 3', fileType: 'Report', fileSubType: 'NIV Report', predictedFileType: 'Letter', predictedSubFileType: 'Letter', score: 94 },
    { fileName: 'Test 4', fileType: 'Report', fileSubType: 'NIV Report', predictedFileType: 'Letter', predictedSubFileType: 'Letter', score: 98 },
    { fileName: 'Test 5', fileType: 'Report', fileSubType: 'NIV Report', predictedFileType: 'Letter', predictedSubFileType: 'Letter', score: 62 },
    { fileName: 'Test 6', fileType: 'Report', fileSubType: 'NIV Report', predictedFileType: 'Letter', predictedSubFileType: 'Letter', score: 77 },
  ];

  getScoreColor(score: number): string {
    return score >= 50 ? 'green' : 'red';
  }
}
