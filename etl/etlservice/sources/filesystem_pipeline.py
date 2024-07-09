import dlt
import pandas as pd

filePath = ("{1}")
df = pd.{2}(filePath{4})
data = df.to_dict(orient="records")

pipeline = dlt.pipeline(
    pipeline_name="{0}_pipeline",
    destination='duckdb',
    dataset_name="{0}",
)
load_info = pipeline.run(data, table_name="{3}")

print(load_info)