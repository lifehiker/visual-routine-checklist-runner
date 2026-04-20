# Features

## Visual Routine Builder
- Status: completed
- Date: 2026-04-20
- Description: Create step-by-step visual routines with emoji icons, titles, descriptions, and duration labels. Drag-and-drop step reordering via DnD Kit.
- Implementation: RoutineForm component, step-editor component, POST/PUT to /api/routines

## Full-Screen Run Mode
- Status: completed
- Date: 2026-04-20
- Description: Distraction-free step-by-step runner with large emoji display, progress bar, dot navigation, and a completion celebration screen.
- Implementation: RunMode client component, creates RoutineRun/RoutineRunStep records via /api/runs

## Lock Sequence Mode
- Status: completed
- Date: 2026-04-20
- Description: Prevents skipping steps during run mode, enforces completing steps in order. Toggle per routine.
- Implementation: lockSequence boolean field on Routine model, enforced in RunMode component

## 10 Pre-Built Templates
- Status: completed
- Date: 2026-04-20
- Description: Morning routine, bedtime, tooth brushing, classroom visual schedule, autism daily schedule, ADHD focus routine, first-then board, after school, getting dressed, packing school bag.
- Implementation: src/lib/templates-data.ts, /templates/[slug] statically generated pages with FAQ JSON-LD schema

## Print Mode
- Status: completed
- Date: 2026-04-20
- Description: Server-rendered printable layout of any routine with checkbox squares next to each step.
- Implementation: /app/routines/[id]/print (server) + src/app/(app)/app/routines/[id]/print/print-view.tsx (client)

## Share Links
- Status: completed
- Date: 2026-04-20
- Description: Generate public share links so unauthenticated users can run a routine without an account.
- Implementation: ShareLink model with unique token, /run/[token] public page, /api/share-links CRUD endpoint

## Photo/Image Upload
- Status: completed
- Date: 2026-04-20
- Description: Attach photos to routine steps. Stored in /public/uploads (dev) or /data/uploads (prod Docker volume).
- Implementation: /api/uploads with plan limit check, ImageAsset model tracking uploads per user

## Free Plan Limits
- Status: completed
- Date: 2026-04-20
- Description: Free users limited to 3 routines and 10 photo uploads. Upgrade prompts shown when limits are reached.
- Implementation: src/lib/plan-limits.ts with canCreateRoutine() and canUploadPhoto() helper functions

## Subscription and Billing
- Status: completed
- Date: 2026-04-20
- Description: 4-tier pricing: Free, Solo ($6/mo), Family ($12/mo), Classroom ($19/mo) powered by Stripe.
- Implementation: PLANS constant in src/lib/stripe.ts, /app/billing page, /api/webhooks/stripe Stripe event handler

## Run History Tracking
- Status: completed
- Date: 2026-04-20
- Description: Every run is recorded with step-level completion timestamps. Shows completion count and last run date per routine.
- Implementation: RoutineRun and RoutineRunStep Prisma models, /api/runs/complete increments completionCount

## SEO Landing Pages
- Status: completed
- Date: 2026-04-20
- Description: Template detail pages with full SEO metadata, FAQ sections with JSON-LD schema markup, and comparison pages vs Choiceworks and First Then alternatives.
- Implementation: /templates/[slug] with generateMetadata/generateStaticParams, /compare/[slug] pages

## Credentials Authentication
- Status: completed
- Date: 2026-04-20
- Description: Email/password authentication using NextAuth v5 with bcrypt password hashing. No third-party OAuth dependencies.
- Implementation: src/auth.ts with CredentialsProvider, PrismaAdapter, JWT session strategy
