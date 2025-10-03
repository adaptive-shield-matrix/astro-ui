import type { DemoListType } from "~/generate_demo_list/DemoListType"

export const demoList = {
  select: ["demo_select"],
  form: ["demo_fieldset"],
  table: ["demo_table"],
  img: ["demo_img", "demo_typed_img"],
  layouts: ["demo_theme_toggle", "demo_markdown_wrapper"],
  popover: ["demo_popover"],
  modal: ["demo_modal", "demo_dialogs", "demo_modal_button"],
  page: ["demo_page_centered", "demo_page_centered_card"],
  card: ["demo_card"],
  details: ["demo_details"],
  list: ["demo_ps", "demo_check_point", "demo_check_points", "demo_numbered_list", "demo_black_bullet_points"],
  link: ["demo_link_text", "demo_link_button"],
  button: ["demo_buttons"],
  icon: ["demo_icon"],
} satisfies DemoListType
