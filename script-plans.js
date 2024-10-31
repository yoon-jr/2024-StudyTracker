// 요소 선택
const planInput = document.getElementById("plan-input");
const addPlanButton = document.getElementById("add-plan");
const planList = document.getElementById("plan-list");

// 플랜 추가 함수
function addPlan() {
  const planText = planInput.value.trim();
  if (planText === "") return;

  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // 체크박스 이벤트: 체크 시 줄 긋기 및 완료 여부 확인
  checkbox.addEventListener("change", () => {
    listItem.style.textDecoration = checkbox.checked ? "line-through" : "none";
    checkAllCompleted();
  });

  listItem.appendChild(checkbox);
  listItem.appendChild(document.createTextNode(planText));
  planList.appendChild(listItem);

  planInput.value = "";
}

// 모두 완료 체크 함수
function checkAllCompleted() {
  const allPlans = document.querySelectorAll(
    "#plan-list li input[type='checkbox']"
  );
  const allCompleted = Array.from(allPlans).every(
    (checkbox) => checkbox.checked
  );

  if (allCompleted) {
    alert("계획을 모두 완료되었습니다!");
  }
}

// 버튼 클릭 시 플랜 추가
addPlanButton.addEventListener("click", addPlan);
