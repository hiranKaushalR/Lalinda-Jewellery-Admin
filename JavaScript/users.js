const userManage = document.getElementById("user-manage");
const supplierManage = document.getElementById("supplier-manage");
const userManageBodySection = document.getElementById(
  "user-manage-body-section"
);
const supplierManageBodySection = document.getElementById(
  "supplier-manage-body-section"
);

userManage.style.backgroundColor = "#008080";
supplierManage.style.backgroundColor = "#000000";
userManageBodySection.style.display = "block";
supplierManageBodySection.style.display = "none";

userManage.addEventListener("click", () => {
  userManage.style.backgroundColor = "#008080";
  supplierManage.style.backgroundColor = "#000000";
  userManageBodySection.style.display = "block";
  supplierManageBodySection.style.display = "none";
});

supplierManage.addEventListener("click", () => {
  supplierManage.style.backgroundColor = "#008080";
  userManage.style.backgroundColor = "#000000";
  userManageBodySection.style.display = "none";
  supplierManageBodySection.style.display = "block";
});
