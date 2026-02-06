import { spawn } from 'node:child_process';
import { resolve } from 'node:path';
import { existsSync } from 'node:fs';
import ffmpegPath from 'ffmpeg-static';

const projectRoot = resolve(process.cwd());
const inputDir = resolve(projectRoot, 'client', 'public');

const jobs = [
  {
    input: 'andullation-therapy-demo-1.mp4',
    outputs: [
      { file: 'andullation-therapy-demo-1-720p.mp4', scale: '1280:-2', crf: 28, audioBitrate: '128k' },
      { file: 'andullation-therapy-demo-1-480p.mp4', scale: '854:-2', crf: 30, audioBitrate: '96k' },
    ],
  },
  {
    input: 'andullation-therapy-demo-2.mp4',
    outputs: [
      { file: 'andullation-therapy-demo-2-720p.mp4', scale: '1280:-2', crf: 28, audioBitrate: '128k' },
      { file: 'andullation-therapy-demo-2-480p.mp4', scale: '854:-2', crf: 30, audioBitrate: '96k' },
    ],
  },
];

const force = process.argv.includes('--force');

function runFfmpeg(args, label) {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(ffmpegPath, args, { stdio: 'inherit' });
    child.on('exit', (code) => {
      if (code === 0) {
        resolvePromise();
      } else {
        reject(new Error(`${label} failed with code ${code}`));
      }
    });
  });
}

async function main() {
  for (const job of jobs) {
    const inputPath = resolve(inputDir, job.input);

    for (const output of job.outputs) {
      const outputPath = resolve(inputDir, output.file);
      if (!force && existsSync(outputPath)) {
        console.log(`Skipping existing ${output.file}`);
        continue;
      }

      const args = [
        '-y',
        '-i', inputPath,
        '-vf', `scale=${output.scale}`,
        '-c:v', 'libx264',
        '-preset', 'veryfast',
        '-crf', String(output.crf),
        '-c:a', 'aac',
        '-b:a', output.audioBitrate,
        '-movflags', 'faststart',
        outputPath,
      ];

      console.log(`Transcoding ${job.input} -> ${output.file} ...`);
      await runFfmpeg(args, output.file);
      console.log(`Done ${output.file}`);
    }
  }

  console.log('All transcodes complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
