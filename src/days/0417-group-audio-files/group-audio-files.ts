type FileGroup = Array<number>;

export function groupAudioFiles(
  files: Array<number>,
  maxDuration: number,
): Array<FileGroup> {
  const candidateFiles = files.toSorted((a, b) => b - a);
  let groupedFiles: Array<FileGroup> = [];
  while (candidateFiles.length > 0) {
    const file = candidateFiles.shift()!;
    const candidateGroup = groupedFiles.findIndex(
      (group) =>
        group.reduce((acc, groupedFile) => acc + groupedFile, 0) + file <=
        maxDuration,
    );
    if (candidateGroup >= 0) {
      groupedFiles[candidateGroup].push(file);
    } else {
      groupedFiles[groupedFiles.length] = [file];
    }
  }
  return groupedFiles;
}
