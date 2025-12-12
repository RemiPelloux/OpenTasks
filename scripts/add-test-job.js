import { Queue } from 'bullmq';
import Redis from 'ioredis';

async function main() {
  const connection = new Redis('redis://localhost:6379', { maxRetriesPerRequest: null });
  const queue = new Queue('cursor-agent-tasks', { connection });
  
  const jobData = {
    jobId: 'job_test_001',
    ticketId: 'cmixtest001',
    projectId: 'cmix9n2x50000njtbini0t7zl',
    title: 'Fix missing translation common.likes',
    prompt: `Task: Fix missing translation common.likes

Description:
## What needs to be done
The post display page shows the raw translation key common.likes instead of the translated Likes text.

## Acceptance Criteria
- Locate the i18n translation files in the frontend
- Add common.likes key with value Likes for all supported languages
- Verify post display shows Likes correctly

## Technical Details
Check locales folder or i18n configuration files in the frontend codebase.

Repository: https://github.com/RemiPelloux/openpro-web
Target Branch: frontend-web

Instructions: Implement this task, write necessary tests, and create a pull request.`,
    targetBranch: 'frontend-web'
  };
  
  await queue.add('ticket-cmixtest001', jobData, { jobId: jobData.jobId });
  
  console.log('✅ Job added to queue!');
  console.log('Job ID:', jobData.jobId);
  console.log('Ticket ID:', jobData.ticketId);
  
  await queue.close();
  await connection.quit();
  process.exit(0);
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});




