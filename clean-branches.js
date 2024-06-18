const { execSync } = require("child_process");

// 現在の日付を取得
const today = new Date();
const twoDaysAgo = new Date(today);
twoDaysAgo.setDate(today.getDate() - 2);

// 日付をYYYYMMDD形式に変換
const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
};

const thresholdDate = formatDate(twoDaysAgo);

// 全てのリモートブランチを取得
const remoteBranches = execSync("git branch -r")
  .toString()
  .split("\n")
  .map((branch) => branch.trim());

// 全てのローカルブランチを取得
const localBranches = execSync("git branch")
  .toString()
  .split("\n")
  .map((branch) => branch.trim().replace("* ", ""));

// 削除対象のブランチをフィルタリング
const branchesToDelete = remoteBranches
  .filter((branch) => {
    const match = branch.match(/feature_(\d{8})/);
    if (match) {
      const branchDate = match[1];
      return branchDate < thresholdDate;
    }
    return false;
  })
  .map((branch) => branch.replace("origin/", ""));

// リモートブランチを削除
branchesToDelete.forEach((branch) => {
  execSync(`git push origin --delete ${branch}`);
});

// ローカルブランチを削除;
branchesToDelete.forEach((branch) => {
  if (localBranches.includes(branch)) {
    execSync(`git branch -d ${branch}`);
  }
});

console.log("Old branches deleted:", branchesToDelete);
