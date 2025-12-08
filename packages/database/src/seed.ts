/**
 * Database Seed Script
 * Creates initial invite codes and admin user
 */

import { PrismaClient } from '@prisma/client';
import { hashPassword } from './encryption.js';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log('🌱 Seeding database...\n');

  // Create initial invite codes from environment or defaults
  const inviteCodes = process.env.INITIAL_INVITE_CODES?.split(',') || [
    'OPENTASKS-2024',
    'DEVELOPER-ACCESS',
    'TEAM-INVITE',
  ];

  console.log('Creating invite codes...');
  for (const code of inviteCodes) {
    const trimmedCode = code.trim();
    const existing = await prisma.inviteCode.findUnique({
      where: { code: trimmedCode },
    });

    if (!existing) {
      await prisma.inviteCode.create({
        data: {
          code: trimmedCode,
          type: 'UNLIMITED',
          maxUses: 0,
          description: 'Default invite code',
          expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
        },
      });
      console.log(`  ✓ Created invite code: ${trimmedCode}`);
    } else {
      console.log(`  - Invite code already exists: ${trimmedCode}`);
    }
  }

  // Create admin user if it doesn't exist
  console.log('\nCreating admin user...');
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@opentasks.local';
  const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!';
  
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const passwordHash = await hashPassword(adminPassword);
    
    await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        name: 'Administrator',
        role: 'SUPER_ADMIN',
      },
    });
    console.log(`  ✓ Created admin user: ${adminEmail}`);
    console.log(`  ℹ️  Default password: ${adminPassword} (change immediately!)`);
  } else {
    console.log(`  - Admin user already exists: ${adminEmail}`);
  }

  console.log('\n✅ Database seeding complete!');
  console.log('\n📋 Available invite codes:');
  inviteCodes.forEach(code => console.log(`   • ${code.trim()}`));
  console.log(`\n👤 Admin login: ${adminEmail}`);
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
