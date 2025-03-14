import React from "react";

export default (entities, screen, layout) => {
  if (!entities || !screen || !layout) return null;

  const calculateEntities = () => {
    const ArrayOfEntities = Object.keys(entities).filter(
      (key) => entities[key].renderer
    );

    const ArrrayToReturn = new Array(ArrayOfEntities.length);
    for (let i = 0; i < ArrayOfEntities.length; i++) {
      let entity = entities[ArrayOfEntities[i]];

      if (typeof entity.renderer === "object") {
        ArrrayToReturn[i] = (
          <entity.renderer.type
            key={ArrayOfEntities[i]}
            screen={screen}
            layout={layout}
            {...entity}
          />
        );
      } else if (typeof entity.renderer === "function") {
        ArrrayToReturn[i] = (
          <entity.renderer
            key={ArrayOfEntities[i]}
            screen={screen}
            layout={layout}
            {...entity}
          />
        );
      }
    }

    return ArrrayToReturn;
  };

  return calculateEntities();
};

/*export default (entities, screen, layout) => {
	if (!entities || !screen || !layout) return null;

	return Object.keys(entities)
		.filter(key => entities[key].renderer)
		.map(key => {
			let entity = entities[key];
			if (typeof entity.renderer === "object")
				return (
					<entity.renderer.type
						key={key}
						screen={screen}
						layout={layout}
						{...entity}
					/>
				);
			else if (typeof entity.renderer === "function")
				return (
					<entity.renderer
						key={key}
						screen={screen}
						layout={layout}
						{...entity}
					/>
				);
		});
};
*/
