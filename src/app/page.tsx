import { db } from "~/server/db";
import {
  folders as foldersSchema,
  files as filesSchema,
} from "~/server/db/schema";
import DriveContents from "./drive-contents";

export default async function GoogleDriveClone() {
  const files = await db.select().from(filesSchema);
  const folders = await db.select().from(foldersSchema);

  return <DriveContents files={files} folders={folders} />;
}
