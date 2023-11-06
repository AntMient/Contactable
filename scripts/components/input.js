export function input({
    label,
    id,
    name,
    placeholder = "",
    type,
    required = false,
    value = false,
  }) {
    return `
    <div class="input">
      <div class="gap-2 flex-column gap">
        <input
          type="${type ? type : "text"}"
          placeholder="${placeholder}"
          class="text border-bottom"
          id="${id}"
          name="${name ? name : id}"
          ${value ? `value="${value}"` : ""}
          ${required ? "required" : ""}
        />
      </div>
    </div>
    `;
  }