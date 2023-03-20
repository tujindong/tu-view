export default {
	name: "TuDescriptionsRow",

	inject: ["tuDescriptions"],

	props: {
		row: {
			type: Array,
		},
	},

	render(h) {
		const { tuDescriptions } = this;
		const row = (this.row || []).map(item => {
			return {
				...item,
				label: item.slots.label || item.props.label,
				...["labelClassName", "contentClassName", "labelStyle", "contentStyle"].reduce(
					(res, key) => {
						res[key] = item.props[key] || tuDescriptions[key];
						return res;
					},
					{}
				),
			};
		});
		if (tuDescriptions.direction === "vertical") {
			return (
				<tbody>
					<tr class="tu-descriptions-row">
						{row.map(item => {
							return (
								<th
									class={{
										"tu-descriptions-item__cell": true,
										"tu-descriptions-item__label": true,
										"has-colon": tuDescriptions.border ? false : tuDescriptions.colon,
										"is-bordered-label": tuDescriptions.border,
										[item.labelClassName]: true,
									}}
									style={item.labelStyle}
									colSpan={item.props.span}>
									{item.label}
								</th>
							);
						})}
					</tr>
					<tr class="tu-descriptions-row">
						{row.map(item => {
							return (
								<td
									class={[
										"tu-descriptions-item__cell",
										"tu-descriptions-item__content",
										item.contentClassName,
									]}
									style={item.contentStyle}
									colSpan={item.props.span}>
									{item.slots.default}
								</td>
							);
						})}
					</tr>
				</tbody>
			);
		}
		if (tuDescriptions.border) {
			return (
				<tbody>
					<tr class="tu-descriptions-row">
						{row.map(item => {
							return [
								<th
									class={{
										"tu-descriptions-item__cell": true,
										"tu-descriptions-item__label": true,
										"is-bordered-label": tuDescriptions.border,
										[item.labelClassName]: true,
									}}
									style={item.labelStyle}
									colSpan="1">
									{item.label}
								</th>,
								<td
									class={[
										"tu-descriptions-item__cell",
										"tu-descriptions-item__content",
										item.contentClassName,
									]}
									style={item.contentStyle}
									colSpan={item.props.span * 2 - 1}>
									{item.slots.default}
								</td>,
							];
						})}
					</tr>
				</tbody>
			);
		}
		return (
			<tbody>
				<tr class="tu-descriptions-row">
					{row.map(item => {
						return (
							<td
								class="tu-descriptions-item tu-descriptions-item__cell"
								colSpan={item.props.span}>
								<div class="tu-descriptions-item__container">
									<span
										class={{
											"tu-descriptions-item__label": true,
											"has-colon": tuDescriptions.colon,
											[item.labelClassName]: true,
										}}
										style={item.labelStyle}>
										{item.label}
									</span>
									<span
										class={["tu-descriptions-item__content", item.contentClassName]}
										style={item.contentStyle}>
										{item.slots.default}
									</span>
								</div>
							</td>
						);
					})}
				</tr>
			</tbody>
		);
	},
};
