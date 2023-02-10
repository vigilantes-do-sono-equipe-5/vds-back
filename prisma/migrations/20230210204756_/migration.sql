-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "employees" INTEGER NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "day_goal" INTEGER NOT NULL,
    "night_goal" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Program_Session" (
    "id" TEXT NOT NULL,
    "session_id" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "User_Program_Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "grade" INTEGER NOT NULL,
    "created" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Isi" (
    "id" TEXT NOT NULL,
    "q1" INTEGER NOT NULL,
    "q2" INTEGER NOT NULL,
    "q3" INTEGER NOT NULL,
    "q4" INTEGER NOT NULL,
    "q5" INTEGER NOT NULL,
    "q6" INTEGER NOT NULL,
    "q7" INTEGER NOT NULL,
    "created_at" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "Isi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gad" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "q1" INTEGER NOT NULL,
    "q2" INTEGER NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "Gad_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Phq" (
    "id" TEXT NOT NULL,
    "q1" INTEGER NOT NULL,
    "q2" INTEGER NOT NULL,
    "created_at" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "Phq_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Productivity" (
    "id" TEXT NOT NULL,
    "q1" INTEGER NOT NULL,
    "q2" INTEGER NOT NULL,
    "q3" INTEGER NOT NULL,
    "q4" INTEGER NOT NULL,
    "created_at" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,

    CONSTRAINT "Productivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sleep_Diaries" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "autogenic_training" BOOLEAN,
    "behavior_activation" BOOLEAN,
    "challenge_catastrophic_thinking" BOOLEAN,
    "concentration" DOUBLE PRECISION,
    "created_at" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "deep_breath" BOOLEAN,
    "energy" DOUBLE PRECISION,
    "get_up" TEXT NOT NULL,
    "go_bed" TEXT NOT NULL,
    "go_sleep" TEXT NOT NULL,
    "grade" DOUBLE PRECISION,
    "gratitude" BOOLEAN,
    "humor" DOUBLE PRECISION,
    "imagery" BOOLEAN,
    "light_therapy" BOOLEAN,
    "meditation" BOOLEAN,
    "paradoxical_intention" BOOLEAN,
    "parking_lot" BOOLEAN,
    "pmr" BOOLEAN,
    "relationships" DOUBLE PRECISION,
    "stimulus_control" BOOLEAN,
    "thought_block" BOOLEAN,
    "timezone" INTEGER NOT NULL,
    "time_to_sleep" INTEGER NOT NULL,
    "wake_up" TEXT NOT NULL,
    "wake_up_count" INTEGER NOT NULL,
    "wake_up_duration" INTEGER NOT NULL,

    CONSTRAINT "Sleep_Diaries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "sleep_tag" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagOnSleep_Diaries" (
    "id" TEXT NOT NULL,
    "sleep_tagId" TEXT NOT NULL,
    "sleep_DiariesId" TEXT NOT NULL,

    CONSTRAINT "TagOnSleep_Diaries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_sleep_tag_key" ON "Tag"("sleep_tag");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Program_Session" ADD CONSTRAINT "User_Program_Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Program_Session" ADD CONSTRAINT "User_Program_Session_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Isi" ADD CONSTRAINT "Isi_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Isi" ADD CONSTRAINT "Isi_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gad" ADD CONSTRAINT "Gad_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gad" ADD CONSTRAINT "Gad_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phq" ADD CONSTRAINT "Phq_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Phq" ADD CONSTRAINT "Phq_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productivity" ADD CONSTRAINT "Productivity_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Productivity" ADD CONSTRAINT "Productivity_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sleep_Diaries" ADD CONSTRAINT "Sleep_Diaries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sleep_Diaries" ADD CONSTRAINT "Sleep_Diaries_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagOnSleep_Diaries" ADD CONSTRAINT "TagOnSleep_Diaries_sleep_tagId_fkey" FOREIGN KEY ("sleep_tagId") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagOnSleep_Diaries" ADD CONSTRAINT "TagOnSleep_Diaries_sleep_DiariesId_fkey" FOREIGN KEY ("sleep_DiariesId") REFERENCES "Sleep_Diaries"("id") ON DELETE CASCADE ON UPDATE CASCADE;
