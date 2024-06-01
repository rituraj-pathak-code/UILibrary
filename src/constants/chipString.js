export const basicChip = ' <Chip label={"Chip"} />\n';
export const primaryChip = ' <Chip label={"Chip"} type={"primary"} />\n'
export const secondaryChip = ' <Chip label={"Chip"} type={"secondary"} />\n'
export const errorChip = ' <Chip label={"Chip"} type={"error"} />'

export const chipGroup = '<ChipGroup>\n {chipContent?.map((item) => (\n <Chip\n label={item.label}\n key={item.id}\n onDelete={() => deleteHandler(item.id)}\n />\n ))}\n</ChipGroup>'