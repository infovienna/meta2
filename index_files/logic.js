/* LANGUAGES */

$(".languages__top").click(function (e) {
  e.stopPropagation();
  $(this).closest(".languages").toggleClass("active");
});

$(".languages__item").click(function (e) {
  e.stopPropagation();
  $(this).closest(".languages").toggleClass("active");
});

$(".languages").click(function (e) {
  e.stopPropagation();
});

$(document).on("click", "body *", function () {
  if ($(".languages").hasClass("active")) {
    $(".languages").removeClass("active");
  }
});

/* BURGER */
const burger = new CgBurger({
  burgerSelector: "[data-burger]", // Селектор кнопки открытия
  targetSelector: "[data-burger-target]", // Селектор элемента который должен быть открыт
  hasCloseButton: true, // Есть ли отдельная кнопка закрытия
  closeButtonSelector: "[data-burger-close]", // Селектор кнопки закрытия
});

/* TABS */
const tabs = new CgTabs(".tabs", {
  // activeClass: "active", // Класс активности для элементов
});

/* BUTTON SHOW PASSWORD */
const showPasswordButtons = document.querySelectorAll(".js-show-password");

if (showPasswordButtons.length > 0) {
  showPasswordButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const inputBox = e.currentTarget.closest(".input__box");

      if (inputBox) {
        const inputControl = inputBox.querySelector(".input__control");

        if (inputControl.getAttribute("type") === "password") {
          inputControl.setAttribute("type", "text");
          inputControl.setAttribute("aria-label", "Скрыть текст пароля");
          e.currentTarget.classList.add("active");
        } else {
          inputControl.setAttribute("type", "password");
          inputControl.setAttribute("aria-label", "Показать текст пароля");
          e.currentTarget.classList.remove("active");
        }
      }
    });
  });
}

/* SELECTS */
const selects = new CgSelect(".form-select", {
  topSelector: ".form-select__top",
  bodySelector: ".form-select__body",
  itemSelector: ".form-select__item",
});

/* CLIPBOARD */
let copyBtns = document.querySelectorAll("[data-clipboard-text]");
let clipboard = new ClipboardJS(copyBtns);

/* MODALS */

const modals = new CgModal({
  effect: "fade", // Эффект появления модального окна (fade, transformBottom, transformLeft, transformTop, transformRight, scaleCenter) [default = null]
});

/* PINCODE */
$(".pincode__input").keydown(function (e) {
  $(this).val("");
});

$(".pincode__input").keyup(function (e) {
  var $wrap = $(this).closest(".pincode");
  var $inputs = $wrap.find(".pincode__input");
  var val = $(this).val();

  // Ввод только цифр
  if (val == val.replace(/[0-9]/, "")) {
    $(this).val("");
    return false;
  }

  // Передача фокуса следующему innput
  $inputs.eq($inputs.index(this) + 1).focus();
});

/* ADDRESS TABLE */

$("#address-table-btn").click(function () {
  $("#address-table tbody").append(`
  <tr>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">1</p>
    </td>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">exodus</p>
    </td>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh</p>
    </td>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">2022-08-18 23:37:07</p>
    </td>
    <td class="w-0" style="width: 100px !important;"><button
        class="text text--fz-16 text--lh-auto text--fw-600 text--no-underline color-pink"
        data-open-modal="address">Delete</button></td>
  </tr>
  `);

  modals.update();
});

/* EARNINGS TABLE */

$("#earnings-table-btn").click(function () {
  $("#earnings-table tbody").append(`
  <tr>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">000123</p>
    </td>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">12345</p>
    </td>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">$ 10.20</p>
    </td>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">1.5%</p>
    </td>
    <td class="w-0" style="width: 180px !important;">
      <p class="text text--fz-16 text--lh-auto text--fw-600">2022-05-27 13:20:57</p>
    </td>
  </tr>
  `);
});

/* WITHDRAWALS TABLE */

$("#withdrawals-table-btn").click(function () {
  $("#withdrawals-table tbody").append(`
  <tr>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">2022-05-27 13:20:57</p>
    </td>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--no-break text--fw-600 text--overflow"
        style="max-width: 170px;"><span>bc1qxy2k3pfjhx0wlh3pfjhx0wlh3pfjhx0wlh</span></p>
    </td>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">500.00 USD</p>
    </td>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">0.1234567890 BTC</p>
    </td>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">0.1234567890 BTC</p>
    </td>
    <td class="w-0" style="width: 170px !important;">
      <p class="text text--fz-16 text--lh-auto text--fw-600 text--overflow">
        <span>f7173d9c3pfjhx0wlh28c95163e1c1</span></p>
    </td>
  </tr>
  `);
});

/* REF TABLE */

$("#ref-table-btn").click(function () {
  $("#ref-table tbody").append(`
  <tr>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600"
        style="max-width: 450px; min-width: max-content;">samplename@gmail.com</p>
    </td>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--no-break text--fw-600">500.00 USD</p>
    </td>
    <td class="w-0">
      <p class="text text--fz-16 text--lh-auto text--fw-600">9 Level</p>
    </td>
  </tr>
  `);
});

/* DEPOSITS HISTORY */

$("#deposits-list-btn").click(function () {
  $("#deposits-list").append(`
  <div class="box box--small-radius box--small-paddings box--opacity-080 mb-40">
    <div class="box__wrapper">
      <div class="box__wrapper-top box__wrapper-top--small"></div>
      <div class="box__wrapper-bottom box__wrapper-bottom--small"></div>
      <div class="box__wrapper-label color-dodger-blue">ENDED</div>
      <div class="box__top">
        <div class="box__row">
          <div class="box__row-item">
            <p class="text text--left text--fw-600 color-dodger-blue">NO. <span
                class="color-dodger-blue-light">1234</span></p>
          </div>
          <div class="box__row-item">
            <p class="text text--left text--fw-600 color-dodger-blue">PLAN <span class="color-pink">1.5% daily for 200
                days</span></p>
          </div>
          <div class="box__row-item">
            <p class="text text--left text--fw-600 color-dodger-blue">UNIQUE ID <span
                class="color-violet">9asauydsud89syahyd9</span></p>
          </div>
        </div>
      </div>
      <div class="box__inner">
        <div class="box__inner-bg box__inner-bg--fill"></div>
        <div class="box__inner-content">
          <div class="box__group">
            <div class="block block--small">
              <p class="text text--fz-12 text--lh-auto color-dodger-blue mb-10">AMOUNT</p>
              <p class="text text--fw-600">0.1234567890 BTC</p>
            </div>
            <div class="block block--small">
              <p class="text text--fz-12 text--lh-auto color-dodger-blue mb-10">AMOUNT AFTER FEES</p>
              <p class="text text--fw-600">0.1234567890 BTC</p>
            </div>
            <div class="block block--small">
              <p class="text text--fz-12 text--lh-auto color-dodger-blue mb-10">COIN</p>
              <p class="text text--fw-600">USDT-TRC20</p>
            </div>
            <div class="block block--small">
              <p class="text text--fz-12 text--lh-auto color-dodger-blue mb-10">EARNED SO FAR</p>
              <p class="text text--fw-600">$1234 USD</p>
            </div>
            <div class="block block--small">
              <p class="text text--fz-12 text--lh-auto color-dodger-blue mb-10">DATE ADDED</p>
              <p class="text text--fw-600">2022-05-27 13:20:57</p>
            </div>
            <div class="block block--small">
              <p class="text text--fz-12 text--lh-auto color-dodger-blue mb-10">CALCULATED AT</p>
              <p class="text text--fw-600">2022-05-27 13:20:57</p>
            </div>
            <div class="block block--small">
              <p class="text text--fz-12 text--lh-auto color-dodger-blue mb-10">DAYS LEFT</p>
              <p class="text text--fw-600">200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `);
});
