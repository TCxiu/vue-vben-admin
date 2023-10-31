interface imageInfo {
  url: string;
}

export interface UploadResult {
  code: number;
  message: string;
  result: imageInfo;
}
